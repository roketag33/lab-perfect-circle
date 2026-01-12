# ⭕ The Perfect Circle Experiment

A React/Canvas experiment to test your drawing skills. Draw a circle, get judged by an algorithm.

Result of a "Lab" experiment from my portfolio.

## Tech Stack

*   **HTML5 Canvas**: For high-performance rendering.
*   **React**: For UI state management.
*   **Framer Motion**: For smooth animations.
*   **Maths**: Standard deviation algorithm to calculate circularity.

## How it works

1.  **Input**: Captures mouse/touch events.
2.  **Analysis**: Calculates the centroid of the drawn path.
3.  **Scoring**: Measures the deviation of each point from the mean radius.
4.  **Feedback**: Displays a percentage score and a visual guide of the "perfect" circle.
