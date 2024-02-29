'use client'
import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';

function StartBackground () {
  const ref:any = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(2000), { radius: 1.2 }))
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 55;
  })
  return (

    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial transparent color='$fff' size={0.002} sizeAttenuation dethWrite={false} />
      </Points>
    </group>

  )
}

const StartsCanvas = () => (
  <div className='fixed inset-0  mt-[65px] h-auto w-full'>
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StartBackground />
      </Suspense>
    </Canvas>
  </div>
)
export default StartsCanvas;
