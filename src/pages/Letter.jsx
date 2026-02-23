import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';


const Letter = () => {
    const anniversaries = [
        { id: 1, name: '처음 만난 날', date: '2024.01.21' },
        { id: 2, name: '100일 기념일', date: '2024.04.30' },
        { id: 3, name: '2주년 기념일', date: '2026.01.21' }
    ]

    const tones = [
        { id: 'romantic', name: '로맨틱', icon: '💕', description: '달콤하고 감성적인 톤' },
        { id: 'warm', name: '따뜻한', icon: '🤗', description: '포근하고 편안한 톤' },
        { id: 'playful', name: '발랄한', icon: '😊', description: '밝고 경쾌한 톤' },
        { id: 'deep', name: '진지한', icon: '💝', description: '깊이 있고 진심 어린 톤' }
    ]

    return (
        <div>

        </div>
    )
}

export default Letter;