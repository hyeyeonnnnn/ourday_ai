import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import content from '../content.yaml'

const Letter = () => {
    const [selectedAnniversary, setSelectedAnniversary] = useState('');
    const [selectedTone, setSelectedTone] = useState('');
    const [letterContent, setLetterContent] = useState('');

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

    const generateMutation = useMutation({
        mutationFn: async () => {
            await new Promise(resolve => setTimeout(resolve, 2000))
            return `사랑하는 당신에게,\n\n오늘은 우리가 처음 만난 지 1년이 되는 날이에요.\n2024년 1월 14일, 그날의 설렘이 아직도 생생해요.\n\n처음 당신을 봤을 때의 떨림,\n첫 대화를 나눴을 때의 긴장감,\n그리고 '이 사람이다'라는 확신.\n\n함께한 365일 동안 우리는 정말 많은 순간들을 만들었어요.\n벚꽃이 흩날리던 봄날의 산책,\n푸른 바다를 함께 바라보던 여름,\n단풍이 물들던 가을의 데이트,\n그리고 눈이 내리던 겨울의 크리스마스.\n\n모든 계절이 당신과 함께여서 특별했어요.\n\n앞으로도 우리 함께 더 많은 추억을 만들어가요.\n항상 사랑해요. 💕\n\n당신을 사랑하는 사람으로부터`;
        },
        onSuccess: (data) => {
            setLetterContent(data);
        }
    }
    )

    const saveMutation = useMutation({
        mutationFn: async (content) => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log("Saved content:", content);
            return true;
        },
        onSuccess: () => {
            alert("편지가 성공적으로 저장되었습니다! 💾");
        }
    });

    const handleGenerate = () => {
        if (!selectedAnniversary || !selectedTone) {
            alert('기념일과 톤을 모두 선택해주세요!');
            return;
        }
        generateMutation.mutate();
    };

    const handleSave = () => {
        if (!letterContent) return;
        saveMutation.mutate(letterContent);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(letterContent);
        alert('편지가 클립보드에 복사되었습니다!');
    };

    return (
        <div className='max-w-7xl mx-auto px-4 py-8 fade-in'>
            <header className="mb-12 text-center">
                <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-coral to-accent-rose bg-clip-text text-transparent">
                    {content.letter.title}
                </span>
                <span className="text-2xl md:text-3xl font-bold">
                    💌
                </span>
                <p className="text-lg text-gray-500 mt-4">{content.letter.subtitle}</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Settings Panel */}
                <div className="lg:col-span-4 space-y-8 glass-panel rounded-3xl p-8 sticky top-8">
                    {/* Anniversary Selection */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-primary-coral/10 text-primary-coral flex items-center justify-center text-sm">1</span>
                            {content.letter.anniversary_select}
                        </h3>
                        <div className="space-y-3">
                            {anniversaries.map((anniversary) => (
                                <button
                                    key={anniversary.id}
                                    onClick={() => setSelectedAnniversary(anniversary.name)}
                                    className={`w-full flex items-center gap-4 p-4 rounded-2xl border transition-all text-left group hover:scale-[1.02] ${selectedAnniversary === anniversary.name
                                        ? 'bg-primary-coral text-white border-primary-coral shadow-lg shadow-primary-coral/30'
                                        : 'bg-white border-gray-100 hover:border-primary-coral/30 hover:bg-white'
                                        }`}
                                >
                                    <span className={`text-2xl p-3 rounded-xl ${selectedAnniversary === anniversary.name ? 'bg-white/20' : 'bg-gray-50'
                                        }`}>📅</span>
                                    <div>
                                        <p className={`font-bold ${selectedAnniversary === anniversary.name ? 'text-white' : 'text-gray-800'}`}>
                                            {anniversary.name}
                                        </p>
                                        <p className={`text-xs ${selectedAnniversary === anniversary.name ? 'text-white/80' : 'text-gray-400'}`}>
                                            {anniversary.date}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tone Selection */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-accent-lavender/10 text-accent-lavender flex items-center justify-center text-sm">2</span>
                            {content.letter.tone_select}
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                            {tones.map((tone) => (
                                <button
                                    key={tone.id}
                                    onClick={() => setSelectedTone(tone.id)}
                                    className={`p-4 rounded-2xl border transition-all text-center flex flex-col items-center gap-2 hover:scale-105 ${selectedTone === tone.id
                                        ? 'bg-accent-lavender text-white border-accent-lavender shadow-lg shadow-accent-lavender/30'
                                        : 'bg-white border-gray-100 hover:border-accent-lavender/30'
                                        }`}
                                >
                                    <span className="text-3xl">{tone.icon}</span>
                                    <span className={`text-sm font-bold ${selectedTone === tone.id ? 'text-white' : 'text-gray-700'}`}>
                                        {tone.name}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={handleGenerate}
                        disabled={generateMutation.isPending}
                        className="w-full btn btn-primary text-lg py-4 shadow-lg shadow-primary-coral/30 hover:shadow-xl hover:shadow-primary-coral/40 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {generateMutation.isPending ? (
                            <>
                                <span className="animate-spin text-xl">⏳</span>
                                <span>{content.letter.generating}</span>
                            </>
                        ) : (
                            <>
                                <span className="text-xl">✨</span>
                                <span>{content.letter.generate_btn}</span>
                            </>
                        )}
                    </button>
                </div>

                {/* Editor Display */}
                <div className="lg:col-span-8 min-h-[600px] flex flex-col">
                    {letterContent ? (
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative flex-1 flex flex-col animate-fadeIn border border-gray-100">
                            {/* Toolbar */}
                            <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-100">
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl">📝</span>
                                    <h3 className="text-xl font-bold text-gray-800">{content.letter.editor_title}</h3>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={handleCopy}
                                        className="px-4 py-2 rounded-xl bg-gray-50 text-gray-600 hover:bg-gray-100 font-medium text-sm transition-colors flex items-center gap-2"
                                    >
                                        <span>📋</span> {content.letter.copy_btn}
                                    </button>
                                    <button
                                        onClick={handleSave}
                                        disabled={saveMutation.isPending}
                                        className="px-6 py-2 rounded-xl bg-gray-900 text-white hover:bg-black font-medium text-sm transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl"
                                    >
                                        {saveMutation.isPending ? '저장 중...' : (
                                            <>
                                                <span>💾</span> {content.letter.save_btn}
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Editable Area */}
                            <textarea
                                value={letterContent}
                                onChange={(e) => setLetterContent(e.target.value)}
                                className="flex-1 w-full resize-none outline-none border-none text-lg leading-loose font-serif text-gray-700 bg-transparent placeholder-gray-300 min-h-[500px] p-4 rounded-xl focus:bg-gray-50 transition-colors"
                                placeholder="편지 내용이 여기에 표시됩니다..."
                            />

                            <div className="text-right mt-8 pt-6 border-t border-gray-100 text-gray-400 text-sm font-serif italic">
                                From OURDAY.AI
                            </div>
                        </div>
                    ) : (
                        <div className="h-full flex flex-col items-center justify-center bg-white/50 backdrop-blur-sm rounded-3xl border-2 border-dashed border-gray-200 p-12 text-center group hover:border-primary-coral/30 transition-colors">
                            <div className="w-24 h-24 bg-gradient-to-br from-primary-coral/10 to-accent-rose/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                <span className="text-5xl opacity-50 group-hover:opacity-100 transition-opacity">💌</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{content.letter.empty_state_title}</h3>
                            <p className="text-gray-500 max-w-md mx-auto">
                                {content.letter.empty_state_desc}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Letter;