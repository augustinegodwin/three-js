import { AccumulativeShadows, RandomizedLight } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { easing } from "maath"
import { useRef } from "react"


export default function Backdrop() {
  const shadows = useRef<any>(null)
  return (
    <AccumulativeShadows
      position={[0,0,-0.14]}
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.3}
      scale={10}
      rotation={[Math.PI /2,0,0]}
      color="#f2e585"
    >
       <RandomizedLight 
        amount={12}
        radius={15}
        intensity={0.99}
        ambient={0.2}
        position={[5,5,-10]}
      />
      {/*<RandomizedLight 
        amount={1}
        radius={5}
        intensity={0.25}
        ambient={0.75}
        position={[-5,5,-9]}
        
      /> */}
    </AccumulativeShadows>
  )
}
