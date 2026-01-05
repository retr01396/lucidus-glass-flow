// Placeholder component for 3D character model
// Ready for Three.js / react-three-fiber integration
// Assumes a .blend file will be converted to .glb

const Character3D = () => {
  return (
    <div className="w-full h-full relative">
      {/* Placeholder container - Replace with react-three-fiber Canvas when ready */}
      <div className="w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-accent/5 rounded-2xl flex items-center justify-center overflow-hidden">
        {/* This will be replaced with:
            <Canvas>
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} intensity={0.8} />
              <pointLight position={[-5, -5, -5]} intensity={0.3} />
              <Suspense fallback={null}>
                <Model url="/models/character.glb" />
              </Suspense>
            </Canvas>
        */}
        <div className="text-center p-4">
          <p className="text-foreground/40 text-xs font-display mb-1">3D Character</p>
          <p className="text-foreground/30 text-[10px]">Ready for GLB model</p>
        </div>
      </div>
    </div>
  );
};

export default Character3D;

