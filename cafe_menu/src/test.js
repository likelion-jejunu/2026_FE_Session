import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0)

    setCount(1)        // 다음 렌더링때 1로 예약
    console.log(count) // 0 — 아직 0으로 출력된다
}