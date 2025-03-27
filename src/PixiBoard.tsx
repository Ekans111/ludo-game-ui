import { Container, Sprite, Stage } from "@pixi/react";
import WelcomePage from "./scenes/WelcomePage";

export default function PixiBoard({
  dimensions,
}: {
  dimensions: { width: number; height: number };
}) {
  return (
    <Stage
      width={dimensions.width}
      height={dimensions.height}
      options={{
        backgroundColor: 0x1099bb,
      }}
    >
      <Container>
        {/* <Sprite
          image={"/image/login_bg.png"}
          width={dimensions.width}
          height={dimensions.height}
          position={{ x: 0, y: 0 }}
        /> */}
        <WelcomePage />
      </Container>
    </Stage>
  );
}
