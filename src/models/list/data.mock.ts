type Data = {
  label: string;
  content: string;
};

export const data: Data[] = Array.from({ length: 100 }, (_, i) => ({
  label: `Label ${i + 1}`,
  content: `4f7e1a3dcd239fb6a9d84e2c9d7f148b7e9a6c2f5d3b1a9e74f8c2d9a6b5f3e14f7e1a3dcd239fb6a9d84e2c9d7f148b7e9a6c2f5d3b1a9e74f8c2d9a6b5f3e14f7e1a3dcd239fb6a9d84e2c9d7f148b7e9a6c2f5d3b1a9e74f8c2d9a6b5f3e4f7e1a3dcd239fb6a9d84e2c9d7f148b7e9a6c2f5d3b1a9e74f8c2d9a6b5f3e14f7e1a3dcd239fb6a9d84e2c9d7f148b7e9a6c2f5d3b1a9e74f8c2d9a6b5f3e14f7e1a3dcd239fb6a9d84e2c9d7f148b7e9a6c2f5d3b1a9e74f8c2d9a6b5f3e`,
}));
