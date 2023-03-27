import * as React from "react"
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useState } from "react"

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider(
        {
            initial: 0,
            slideChanged(s) {
                setCurrentSlide(s.track.details.rel)
            },
            created() {
                setLoaded(true)
            },
        }
    )

    return (
        <div className="navigation-wrapper">
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide">
                    <h2 className="section-six-header">
                        Built for &#123;architects&#125;{" "}
                    </h2>
                    <div className="section-six-text-wrapper">
                        <p className="section-six-text">
                            Future-proof your systems with unlimited scalability and access to exact copies of all your data with millisecond latency.
                        </p>
                    </div>
                </div>
                <div className="keen-slider__slide">
                    <h2 className="section-six-header">
                        Built for &#123;engineers&#125;{" "}
                    </h2>
                    <div className="section-six-text-wrapper">
                        <p className="section-six-text">
                            Spend your time creating value instead of integrating systems.
                        </p>
                    </div>
                </div>
                <div className="keen-slider__slide">
                    <h2 className="section-six-header">
                        Built for &#123;analysts&#125;{" "}
                    </h2>
                    <div className="section-six-text-wrapper">
                        <p className="section-six-text">
                            Gain access to all of your data in your favorite SQL or BI environment.
                        </p>
                    </div>
                </div>
            </div>
            {loaded && instanceRef.current && (
                <div className="dots">
                    {[
                        ...Array(instanceRef.current.track.details.slides.length).keys(),
                    ].map((idx) => {
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    instanceRef.current?.moveToIdx(idx)
                                }}
                                className={"dot" + (currentSlide === idx ? " active" : "")}
                            ></button>
                        )
                    })}
                </div>
            )}
        </div>

    )
}

export default Slider;