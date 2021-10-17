import React from 'react'
import Particles from 'react-particles-js';

const Particle = () => {
    return (
        <div>

            <Particles

                className="particle-canves"
                params={{
                    particles: {
                        number: {
                            value: 6,
                            density: {
                                enable: true,
                                value_area: 90
                            }
                        },
                        shape: {
                            type: "square",
                            stroke: {
                                width: 6,
                                color: "#ffcc00"
                            }
                        }
                    }
                }}
            />
        </div>
    )
}

export default Particle
