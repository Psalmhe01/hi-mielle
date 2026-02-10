import { Text, Paper, Button, Stack } from "@mantine/core";
import { useState, useCallback } from 'react';
import { useEventListener } from '@mantine/hooks';
import "../Styles/Body.css";
import Words from "../Words";

function Cards() {

    const [count, setCount] = useState(0);
    const increment = useCallback(() => setCount((c) => c + 1), []);
    const ref = useEventListener('click', increment);

    return (
        <div className="card">
        <Paper shadow="xl" p="xl">
        <Stack>
            <p>{Words[count%3]}</p>
            <Button ref={ref}>Click me 💕</Button>
        </Stack>
        </Paper>
        </div>
    );
}

export default Cards;
