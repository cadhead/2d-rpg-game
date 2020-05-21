export const Sprites = {
  locations: [
    {
      name: "overworld-image",
      image: "/sprites/locations/overworld.png"
    }
  ] //{ frameWidth: 32, frameHeight: 38 }
}

export const Maps = [
  {
    name: "overworld",
    tileset: "/maps/overworld.json"
  }
]

export const Logo = [
  {
    name: "logo-default",
    image: "/logo/logo_transparent.png",
    duration: 3000,
    options: {
      tint: {
        topLeft: 0xff00ff,
        topRight: 0xffff00,
        bottomLeft: 0x0000ff,
        bottomRight: 0xff0000
      }
    }
  }
]