import {
  Mesh,
  Scene,
  BoxGeometry,
  WebGLRenderer,
  PerspectiveCamera,
  MeshNormalMaterial,
} from 'three'

const scene = new Scene()
const camera = new PerspectiveCamera(60, 1, 0.1, 100)
camera.position.z = 3

const cube = new Mesh(new BoxGeometry(), new MeshNormalMaterial())
scene.add(cube)

const renderer = new WebGLRenderer({ antialias: true })

function animate () {
  requestAnimationFrame(animate)
  const { width, height, clientWidth: cw, clientHeight: ch } = renderer.domElement
  if (width !== cw || height !== ch) {
    camera.aspect = cw / ch
    camera.updateProjectionMatrix()
    renderer.setSize(cw, ch, false)
  }
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  renderer.render(scene, camera)
}

document.body.appendChild(renderer.domElement)
animate()
