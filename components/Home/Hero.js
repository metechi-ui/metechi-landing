import React, { useRef, Suspense } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { useLoader } from "react-three-fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

import { useSpring, a, config } from "react-spring/three";
import { useMove } from "react-use-gesture";
import * as THREE from "three";

const cloudMaterial = {
  color: "#fff",
  specular: "#316DFF",
  emissive: "#000",
  transparent: true
};
const goldMaterial = {
  color: "#fff",
  specular: "#704D05",
  side: THREE.FrontSide,
  emissive: "#000"
};
const blueMaterial = {
  color: "#fff",
  specular: "#09120F",
  side: THREE.FrontSide,
  emissive: "#000"
};
const greenMaterial = {
  color: "#fff",
  specular: "#03061F",
  side: THREE.FrontSide,
  emissive: "#000"
};
const fadeIn = to =>
  useSpring({
    opacity: to || 1,
    from: { opacity: 0 },
    config: config.slow
  });

function MousePad({ children }) {
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  const [spring, set] = useSpring(() => ({
    rotation: [0, 0, 0],
    config: config.slow
  }));
  const bindMove = useMove(
    ({ offset: [x, y] }) =>
      set({ rotation: [y / aspect / 10, x / aspect / 10, 0] }),
    { pointerEvents: true }
  );
  return (
    <a.group {...spring} {...bindMove()}>
      {children}
    </a.group>
  );
}

function Group({ children }) {
  const group = useRef();

  useFrame(() => {
    group.current.rotation.y = group.current.rotation.y += 0.005;
  });

  return <group ref={group}>{children}</group>;
}

function Globe() {
  const obj = useLoader(OBJLoader, "/models/globe.obj");

  return [
    <mesh key="globe_water" geometry={obj.children[0].geometry}>
      <a.meshPhongMaterial {...fadeIn()} attach="material" {...blueMaterial} />
    </mesh>,
    <mesh key="globe_earth" geometry={obj.children[1].geometry}>
      <a.meshPhongMaterial {...fadeIn()} attach="material" {...greenMaterial} />
    </mesh>
  ];
}

function Clouds() {
  const group1 = useRef();
  const group2 = useRef();

  useFrame(() => {
    group1.current.rotation.y = group1.current.rotation.y += 0.005;
    group2.current.rotation.y = group2.current.rotation.y += 0.003;
    group2.current.rotation.x = group2.current.rotation.x += 0.001;
  });

  const obj = useLoader(OBJLoader, "/models/cloud.obj");
  return [
    <a.group key="clouds-x" ref={group1}>
      <mesh
        position={[2, 4, 1]}
        rotation={[-1, 0, 0]}
        geometry={obj.children[0].geometry}
      >
        <a.meshPhongMaterial
          {...fadeIn(0.3)}
          attach="material"
          {...cloudMaterial}
        />
      </mesh>
      <mesh
        position={[-2, 2, -3.5]}
        scale={[0.6, 0.7, 0.5]}
        rotation={[1, 2, 0]}
        geometry={obj.children[0].geometry}
      >
        <a.meshPhongMaterial
          {...fadeIn(0.3)}
          attach="material"
          {...cloudMaterial}
        />
      </mesh>
    </a.group>,
    <a.group key="clouds-xy" ref={group2}>
      <mesh
        position={[-2, 3, 3]}
        scale={[0.5, 0.5, 0.5]}
        rotation={[0, 2, 0]}
        geometry={obj.children[0].geometry}
      >
        <a.meshPhongMaterial
          {...fadeIn(0.3)}
          attach="material"
          {...cloudMaterial}
        />
      </mesh>
      />
      <mesh
        position={[2, 2, -4]}
        scale={[0.3, 0.3, 0.2]}
        rotation={[0, 2, 1]}
        geometry={obj.children[0].geometry}
      >
        <a.meshPhongMaterial
          {...fadeIn(0.3)}
          attach="material"
          {...cloudMaterial}
        />
      </mesh>
      <mesh
        position={[3, 1.5, 3]}
        scale={[1, 0.5, 0.2]}
        rotation={[0, 0, 2]}
        geometry={obj.children[0].geometry}
      >
        <a.meshPhongMaterial
          {...fadeIn(0.3)}
          attach="material"
          {...cloudMaterial}
        />
      </mesh>
    </a.group>
  ];
}

function Buildings() {
  const obj = useLoader(OBJLoader, "/models/buildings.obj");
  const shape = {
    poniter: obj.children[0].geometry, //1
    accordion: obj.children[1].geometry, //4
    diagonal: obj.children[2].geometry, //3
    square: obj.children[3].geometry, //2
    antena: obj.children[4].geometry, //5
    plain: obj.children[5].geometry //6
  };

  return (
    <a.group>
      <Building
        key="Manchuria"
        id="Manchuria"
        geometry={shape.poniter}
        position={[0, 3.5, 1]}
        rotation={[0.2, -0.2, -0.1]}
        timing={0.6}
      />
      <Building
        key="Russia"
        id="Russia"
        geometry={shape.square}
        position={[-2, 2.9, 1]}
        rotation={[0, 0.5, 0.5]}
        timing={0.2}
      />

      <Building
        key="US-west"
        id="US-west"
        geometry={shape.accordion}
        position={[2.5, 2, -1.3]}
        rotation={[-0.2, 0.2, -0.9]}
        timing={0.3}
      />
      <Building
        key="US-east"
        id="US-east"
        geometry={shape.poniter}
        position={[1.2, 2.4, -2.4]}
        rotation={[-0.3, 0.8, -0.4]}
        timing={0.5}
      />

      <Building
        key="US-center"
        id="US-center"
        geometry={shape.diagonal}
        position={[2, 2.35, -2]}
        rotation={[0, 0.85, -0.7]}
        timing={0.2}
      />
      <Building
        key="Brazil"
        id="Brazil"
        geometry={shape.antena}
        position={[1.6, -0.3, -3.2]}
        rotation={[0, 1.2, -1.6]}
        timing={0.6}
      />

      <Building
        key="India"
        id="India"
        geometry={shape.diagonal}
        position={[-3, 1.8, 1]}
        rotation={[0, 0.2, 1]}
        timing={0.2}
      />
      <Building
        key="Middle-East"
        id="Middle-East"
        geometry={shape.antena}
        position={[-3, 1.8, -1]}
        rotation={[0, -0.3, 0.95]}
        timing={0.4}
      />

      <Building
        key="Africa-center"
        id="Africa-center"
        geometry={shape.poniter}
        position={[-3, 0.5, -2]}
        rotation={[0, -0.6, 1.4]}
        timing={0.5}
      />
      <Building
        key="Africa-east"
        id="Africa-east"
        geometry={shape.square}
        position={[-1.8, 0.8, -3]}
        rotation={[0, -1, 1.3]}
        timing={0.1}
      />

      <Building
        key="EU"
        id="EU"
        geometry={shape.plain}
        position={[-2, 2.4, -1.8]}
        rotation={[0, -0.8, 0.95]}
        timing={0.3}
      />

      <Building
        key="Australia"
        id="Australia"
        geometry={shape.accordion}
        position={[0, -1.2, 3.2]}
        rotation={[1.8, 0, 0]}
        timing={0.4}
      />
    </a.group>
  );
}

let buildingsScaleState = [];

function Building({ geometry, position, rotation, timing, id }) {
  const mesh = useRef();
  let scale = 0;

  useFrame(() => {
    const b = buildingsScaleState.find(a => a.id === id);
    if (b) {
      scale = b.scale;
    } else {
      buildingsScaleState.push({ id, scale: 0 });
    }

    scale += 0.04 * timing;
    mesh.current.scale.set(1, Math.sin(scale), 1);

    b
      ? (b.scale = scale)
      : (buildingsScaleState.find(a => a.id === id).scale = scale);
  });

  return (
    <mesh
      ref={mesh}
      position={position}
      rotation={rotation}
      scale={[0, 0, 0]}
      geometry={geometry}
    >
      <a.meshPhongMaterial {...fadeIn()} attach="material" {...goldMaterial} />
    </mesh>
  );
}

function msieversion() {
  if (!window) return false;
  const ua = window.navigator.userAgent;
  const msie = ua.indexOf("MSIE ");

  return msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./);
}

const isMobile = window.innerWidth < 700;

function Hero() {
  if (msieversion())
    return (
      <video
        controls={false}
        playsInline
        autoPlay
        loop
        muted
        style={{ width: "100%", minHeight: "100%" }}
      >
        <source src="/media/globe.webm" type="video/webm" />
        <source src="/media/globe.mp4" type="video/mp4" />
      </video>
    );

  return (
    <Canvas
      // resize={{scroll: true}, { debounce: { scroll: 50, resize: 50 } }}
      camera={{
        position: [0, 2.5, isMobile ? 8 : 6],
        fov: 75,
        near: 0.1,
        far: 1000
      }}
      color="#000"
    >
      <ambientLight intensity={0.3} />
      <spotLight
        intensity={0.65}
        position={[30, 10, 10]}
        angle={0.2}
        penumbra={1}
      />
      <spotLight
        intensity={0.75}
        position={[-30, 20, 10]}
        angle={0.2}
        penumbra={1}
      />

      <MousePad>
        <Group>
          <Suspense fallback={"Loading..."}>
            <Globe />
            <Buildings />
          </Suspense>
        </Group>
      </MousePad>
      <Suspense fallback={"Loading..."}>
        <Clouds />
      </Suspense>
    </Canvas>
  );
}

export default Hero;
