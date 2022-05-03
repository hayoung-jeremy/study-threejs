interface Props {
  boxColor: string
}

const Box = ({ boxColor }: Props) => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <boxBufferGeometry attach='geometry' />
      <meshLambertMaterial attach='material' color={boxColor} />
    </mesh>
  )
}

export default Box
