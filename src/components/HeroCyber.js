import React, { useEffect, useRef } from "react"
import * as THREE from "three"
import { TweenMax, Expo } from "gsap/all"
import { vertexShader, fragmentShader } from "./Shaders.js"
import palleteImage from "../images/gradient.png"
import sunImage from "../images/sun.png"

const getRandomNumber = (min, max) => Math.random() * (max - min) + min

function Hero() {
  const mount = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const overlayRef = useRef(null)
  let renderer
  let frameId

  useEffect(() => {
    createLandscape({
      palleteImage,
      sunImage,
    })

    animateTitles()

    return function cleanup() {
      cancelAnimationFrame(frameId)
      frameId = null
      mount.current.removeChild(renderer.domElement)
    }
  }, [])

  function createLandscape(params) {
    var width = window.innerWidth
    var height = window.innerHeight

    var scene, camera
    var terrain

    var mouse = { x: 0, y: 0, xDamped: 0, yDamped: 0 }
    var isMobile = typeof window.orientation !== "undefined"

    init()

    function init() {
      sceneSetup()
      sceneElements()
      sceneTextures()
      sky()
      render()

      if (isMobile)
        window.addEventListener("touchmove", onInputMove, { passive: false })
      else window.addEventListener("mousemove", onInputMove)

      window.addEventListener("resize", resize)
      resize()
    }

    function sceneSetup() {
      scene = new THREE.Scene()
      var fogColor = new THREE.Color("#121023")
      scene.background = fogColor
      scene.fog = new THREE.Fog(fogColor, 10, 400)

      camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 10000)
      camera.position.y = 8
      camera.position.z = 4

      var ambientLight = new THREE.AmbientLight(0xffffff, 1)
      scene.add(ambientLight)

      renderer = new THREE.WebGLRenderer({
        antialias: true,
      })
      renderer.setPixelRatio = devicePixelRatio
      renderer.setSize(width, height)

      mount.current.appendChild(renderer.domElement)
    }

    function sceneElements() {
      var geometry = new THREE.PlaneBufferGeometry(100, 400, 50, 100)

      var uniforms = {
        time: { type: "f", value: 0.0 },
        scroll: { type: "f", value: 0.0 },
        distortCenter: { type: "f", value: 0.1 },
        roadWidth: { type: "f", value: 0.5 },
        pallete: { type: "t", value: null },
        speed: { type: "f", value: 3 },
        maxHeight: { type: "f", value: 10.0 },
        color: new THREE.Color(1, 1, 1),
      }

      var material = new THREE.ShaderMaterial({
        uniforms: THREE.UniformsUtils.merge([
          THREE.ShaderLib.basic.uniforms,
          uniforms,
        ]),
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        wireframe: true,
        fog: true,
      })

      terrain = new THREE.Mesh(geometry, material)
      terrain.position.z = -180
      terrain.rotation.x = -Math.PI / 2
      scene.add(terrain)
    }

    function sceneTextures() {
      new THREE.TextureLoader().load(params.palleteImage, function(texture) {
        terrain.material.uniforms.pallete.value = texture
        terrain.material.needsUpdate = true
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy()
      })
    }

    function sky() {
      var spriteMap = new THREE.TextureLoader().load(params.sunImage)
      spriteMap.anisotropy = renderer.capabilities.getMaxAnisotropy()
      var spriteMaterial = new THREE.SpriteMaterial({
        map: spriteMap,
      })
      var sprite = new THREE.Sprite(spriteMaterial)
      var theta = Math.PI * -0.02
      var phi = 2 * Math.PI * -0.25
      sprite.position.y = 650 * Math.sin(phi) * Math.sin(theta)
      sprite.position.z = 150 * Math.sin(phi) * Math.cos(theta)
      sprite.scale.set(40, 40, 1)
      scene.add(sprite)
    }

    function resize() {
      width = window.innerWidth
      height = window.innerHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    function onInputMove(e) {
      var x, y
      if (e.type === "mousemove") {
        x = e.clientX
        y = e.clientY
      } else {
        x = e.changedTouches[0].clientX
        y = e.changedTouches[0].clientY
      }

      mouse.x = x
      mouse.y = y
    }

    function render() {
      frameId = requestAnimationFrame(render)
      // damping mouse for smoother interaction
      mouse.xDamped = lerp(mouse.xDamped, mouse.x, 0.1)
      mouse.yDamped = lerp(mouse.yDamped, mouse.y, 0.1)
      var time = performance.now() * 0.001
      terrain.material.uniforms.time.value = time
      terrain.material.uniforms.scroll.value =
        time + map(mouse.yDamped, 0, height, 0, 4)
      terrain.material.uniforms.distortCenter.value = Math.sin(time) * 0.1
      terrain.material.uniforms.roadWidth.value = map(
        mouse.xDamped,
        0,
        width,
        1,
        4.5
      )
      camera.position.y = map(mouse.yDamped, 0, height, 4, 11)
      renderer.render(scene, camera)
    }

    function map(value, start1, stop1, start2, stop2) {
      return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1))
    }

    function lerp(start, end, amt) {
      return (1 - amt) * start + amt * end
    }
  }

  function animateTitles() {
    const overlay = overlayRef.current
    TweenMax.to(overlay, 2, {
      ease: Expo.easeOut,
      opacity: 0,
    })

    const title = titleRef.current
    const titleLetters = Array.from(title.querySelectorAll("span"))
    TweenMax.set(titleLetters, { opacity: 0 })
    TweenMax.staggerTo(
      titleLetters,
      1,
      {
        ease: Expo.easeOut,
        startAt: { rotationX: -100, z: -1000 },
        opacity: 1,
        rotationX: 0,
        z: 0,
      },
      0.1
    )

    const subtitle = subtitleRef.current
    TweenMax.set(subtitle, { opacity: 0 })
    TweenMax.to(subtitle, 1.5, {
      ease: Expo.easeOut,
      startAt: { y: 50 },
      opacity: 1,
      y: 0,
    })

    const glitch = (el, cycles) => {
      if (cycles === 0 || cycles > 3) return
      TweenMax.set(el, {
        x: getRandomNumber(-20, 20),
        y: getRandomNumber(-20, 20),
        color: "#0055ff",
        textShadow: "0px 0px 10px #0055ff",
      })
      setTimeout(() => {
        TweenMax.set(el, {
          x: 0,
          y: 0,
          color: "#fff",
          textShadow: "0px 0px 10px #fff",
        })
        glitch(el, cycles - 1)
      }, getRandomNumber(20, 100))
    }

    const loop = startAt => {
      setTimeout(() => {
        const titleLettersShuffled = titleLetters.sort(
          (a, b) => 0.5 - Math.random()
        )
        const lettersSet = titleLettersShuffled.slice(
          0,
          getRandomNumber(1, titleLetters.length + 1)
        )
        for (let i = 0, len = lettersSet.length; i < len - 1; ++i) {
          glitch(lettersSet[i], 3)
        }
        loop()
      }, startAt || getRandomNumber(500, 3000))
    }
    loop(2500)
  }

  return (
    <main>
      <div className="content">
        <div className="landscape" ref={mount} />
        <h1 className="content__title" ref={titleRef}>
          <div className="word">
            <span>A</span>
            <span>D</span>
            <span>V</span>
            <span>A</span>
            <span>N</span>
            <span>C</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
          </div>{" "}
          <div className="word">
            <span>B</span>
            <span>E</span>
            <span>Y</span>
            <span>O</span>
            <span>N</span>
            <span>D</span>
          </div>
        </h1>
        <h3 className="content__subtitle" ref={subtitleRef}>
          We are the next generation of the digital world.
        </h3>
      </div>
      <div className="overlay" ref={overlayRef} />
      <style jsx>{`
        main {
          width: 100vw;
          height: 100vh;
        }
        .content {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          position: relative;
          align-items: center;
          padding: 0 0 12vmax 0;
          justify-content: flex-end;
        }
        .content__title {
          position: relative;
          font-size: 6vw;
          text-transform: uppercase;
          margin: 0;
          perspective: 1000px;
          text-shadow: 0px 0px 10px var(--white);
        }
        .content__title span {
          display: inline-block;
          white-space: pre;
          transform-origin: 50% -50%;
        }
        .content__subtitle {
          position: relative;
          margin: 0;
          font-weight: 400;
        }
        .landscape {
          position: absolute;
          top: 0;
          left: 0;
        }
        .overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: var(--black);
        }
        .word {
          display: inline-block;
        }
        @media only screen and (max-width: 600px) {
          .word {
            display: block;
          }
          .content__title {
            font-size: 3rem;
            text-align: center;
          }
          .content__subtitle {
            width: 70%;
            margin: 1rem auto;
            text-align: center;
          }
        }
        @media only screen and (min-width: 2500px) {
          .content {
            padding-bottom: 15vmax;
          }
        }
      `}</style>
    </main>
  )
}

export default Hero
