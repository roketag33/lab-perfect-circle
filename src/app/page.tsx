'use client'

import { useState } from 'react'
import GameCanvas from '@/components/lab/perfect-circle/GameCanvas'
import ScoreBoard from '@/components/lab/perfect-circle/ScoreBoard'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

export default function PerfectCirclePage() {
    const [score, setScore] = useState<number | null>(null)
    const [resetCounter, setResetCounter] = useState(0)

    const handleScore = (newScore: number) => {
        setScore(newScore)
    }

    const handleReset = () => {
        setScore(null)
        setResetCounter(prev => prev + 1)
    }

    return (
        <main className="relative w-screen h-screen overflow-hidden bg-stone-50 dark:bg-stone-950">
            {/* Header / UI Layer */}
            <div className="absolute top-6 left-6 z-40 pointer-events-none">
                <Link href="/fr/lab" className="pointer-events-auto">
                    <Button variant="ghost" size="icon" className="group">
                        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                    </Button>
                </Link>
            </div>

            <div className="absolute top-8 left-1/2 -translate-x-1/2 z-30 pointer-events-none text-center select-none opacity-50">
                <h1 className="text-xl font-bold font-sans tracking-widest uppercase text-muted-foreground">
                    The Perfect Circle
                </h1>
                <p className="text-sm">Draw a circle. Get judged.</p>
            </div>

            {/* Game Canvas */}
            <GameCanvas
                onScoreCalculated={handleScore}
                isResetting={resetCounter > 0 && score === null}
            />

            {/* Score Overlay */}
            <ScoreBoard score={score} onReset={handleReset} />
        </main>
    )
}
