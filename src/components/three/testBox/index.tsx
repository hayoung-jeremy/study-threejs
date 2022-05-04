interface Props {
  boxColor: string
  opacity?: number
}

const Box = ({ boxColor, opacity }: Props) => {
  return (
    <mesh rotation={[0.2, 0.3, 0.1]} scale={1.5} castShadow receiveShadow>
      <boxBufferGeometry attach='geometry' />
      <meshLambertMaterial
        attach='material'
        color={boxColor}
        opacity={opacity}
        transparent
      />
    </mesh>
  )
}

export default Box
