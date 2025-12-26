"use client"
import { Center, Environment } from "@react-three/drei"
import Shirt from "./shirt"
import Backdrop from "./backdrop"
import CameraRig from "./cameraRig"
import { Canvas as CanvasComponent }  from '@react-three/fiber'
export default function Canvas() {
  return (
    <CanvasComponent
      shadows
      camera={{position:[0,0,0],fov:25}}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <CameraRig>
        <Backdrop/>
        <Center>
          <Shirt/>
        </Center>
      </CameraRig>
    </CanvasComponent>
  )
}
