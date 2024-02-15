import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import List from "../containers/List";

export default function Counter({
  // propsy pzekazywane do tego komponentu
  counter,
  // stan licznika (counter)
  saveLap,
  // zapisywanie wyniku/rekordu
  stopCounter,
  startCounter,
  // zatrzymywanie/ruszanie stopera
  init,
  // poczatkowa wartosc - ze wzgledu na routing
}) {
  const { initValue } = useParams();
  useEffect(() => {
    // use effect bo moze byc jakas wartos/ze wzgeldu na routing
    if (initValue) {
      init(+initValue);
      // ze wzgledu ze to liczba jest ten plus
    }
  }, []);

  return (
    <div>
      <div>
        <div>
          <button disabled={counter.isCounting} onClick={() => startCounter()}>
            {/* na onclicku startoowanie stopera */}
            start
          </button>
          <button onClick={() => stopCounter()} disabled={!counter.isCounting}>
            {/* zatrzyamnie stopera */}
            stop
          </button>
          <h1>{counter.value}</h1>
        </div>
        <div>
          <button onClick={() => saveLap(counter.value)}>zapisz</button>
          {/* zapisanie wyniku */}
          <List />
        </div>
      </div>
    </div>
  );
}
