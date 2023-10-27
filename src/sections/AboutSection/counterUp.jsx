import { useEffect } from "react";

const CounterUpSection = () => {
  // Function to animate the counting
  const runCounter = (targetElement) => {
    const options = {
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const countTo = entry.target.getAttribute("data-count");
          let currentCount = 0;

          const timer = setInterval(() => {
            entry.target.textContent = currentCount;
            currentCount++;

            if (currentCount > countTo) {
              clearInterval(timer);
            }
          }, 20);

          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(targetElement);
  };

  // Run the counter animation when the component mounts
  useEffect(() => {
    const counterElements = document.querySelectorAll(".counter");
    counterElements.forEach(runCounter);
  }, []);

  return (
    <section className="rts-counter-up-section">
      <div className="container">
        <div className="counter-up-inner">
          <div id="counter" className="count-up ">
            <div className="wrapper">
              <div className="counter" data-count={69}>
                0
              </div>
              <h3 className="counter-text">CLUB MEMBER</h3>
            </div>
            <div className="wrapper">
              <div className="counter" data-count={46}>
                0
              </div>
              <h3 className="counter-text">TROPHIES</h3>
            </div>
            <div className="wrapper">
              <div className="counter" data-count={63}>
                0
              </div>
              <h3 className="counter-text">COACHES</h3>
            </div>
            <div className="wrapper">
              <div className="counter" data-count={58}>
                0
              </div>
              <h3 className="counter-text">CLASSES</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterUpSection;
