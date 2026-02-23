import { use, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import content from '../content.yaml';

const Question = () => {
    const [myAnswer, setMyAnswer] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Mock Data: Today's Question
    const todayQuestion = {
        id: 101,
        date: '2024. 02. 09',
        content: "만약 우리가 처음 만난 날로 돌아간다면,\n꼭 다시 하고 싶은 것은 무엇인가요?",
        partnerAnswer: null // null이면 아직 답변 안 함, 값이 있으면 답변 함 (근데 내가 안 쓰면 안 보임)
    };

    // Mock Data: Past Questions
    const history = [
        {
            id: 100,
            date: '2024. 02. 08',
            content: "서로에게 가장 고마웠던 순간은 언제인가요?",
            myAnswer: "지난번 내가 아팠을 때 죽 사다줬을 때... 진짜 감동이었어 😭",
            partnerAnswer: "내가 만든 도시락 맛있게 먹어줬을 때!",
            isCompleted: true
        },
        {
            id: 99,
            date: '2024. 02. 07',
            content: "우리가 함께 가보고 싶은 여행지는?",
            myAnswer: "스위스 융프라우! 🏔️",
            partnerAnswer: "몰디브 모히또 한잔? 🍹",
            isCompleted: true
        }
    ];

    // Submit Mutation
    const submitMutation = useMutation({
        mutationFn: async (answer) => {
            await new Promise(resolve => setTimeout(resolve, 800)); // Mock API delay
            return true;
        },
        onSuccess: () => {
            setIsSubmitted(true);
        }
    });

    const handleSubmit = () => {
        if (!myAnswer.trim()) return;
        submitMutation.mutate(myAnswer);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 fade-in">
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r">
                    <span className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary-coral to-accent-rose bg-clip-text text-transparent">{content.question.title}</span>💬
                </h1>
                <p className="text-lg text-gray-500">{content.question.subtitle}</p>
            </header>

            {/* Today's Question Card */}
            <section className="mb-16">
                <div className="bg-white rounded-[2.5rem] shadow-card border border-primary-coral/20 overflow-hidden relative">
                    <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-primary-coral to-accent-rose" />

                    <div className="p-8 md:p-12 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-coral/10 text-primary-coral font-bold text-sm mb-6">
                            {todayQuestion.date} • Today's Topic
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12 whitespace-pre-line leading-relaxed">
                            {todayQuestion.content}
                        </h2>

                        {!isSubmitted ? (
                            <div className="max-w-2xl mx-auto space-y-6">
                                <textarea
                                    value={myAnswer}
                                    onChange={(e) => setMyAnswer(e.target.value)}
                                    placeholder="당신의 솔직한 대답을 들려주세요..."
                                    className="w-full h-40 p-6 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-primary-coral/30 focus:bg-white transition-all outline-none resize-none text-lg"
                                />
                                <button
                                    onClick={handleSubmit}
                                    disabled={submitMutation.isPending || !myAnswer.trim()}
                                    className="w-full btn btn-primary py-4 text-lg shadow-lg shadow-primary-coral/30 hover:shadow-xl hover:translate-y-[-2px] transition-all disabled:opacity-50"
                                >
                                    {submitMutation.isPending ? '답변 저장 중...' : '답변 남기고 상대방 답변 보기 💌'}
                                </button>
                                <p className="text-sm text-gray-400">
                                    🔒 {content.question.blind_msg}
                                </p>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 gap-8 animate-fadeIn">
                                {/* My Answer */}
                                <div className="bg-secondary-cream/50 rounded-3xl p-8 text-left relative group hover:bg-secondary-cream transition-colors">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-xl">
                                            🥰
                                        </div>
                                        <span className="font-bold text-gray-600">{content.question.my_answer}</span>
                                    </div>
                                    <p className="text-gray-800 text-lg leading-relaxed">{myAnswer}</p>
                                </div>

                                {/* Partner Answer */}
                                <div className="bg-white border-2 border-dashed border-gray-200 rounded-3xl p-8 text-left relative overflow-hidden">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl">
                                            🦖
                                        </div>
                                        <span className="font-bold text-gray-600">{content.question.partner_answer}</span>
                                    </div>
                                    {todayQuestion.partnerAnswer ? (
                                        <p className="text-gray-800 text-lg leading-relaxed">{todayQuestion.partnerAnswer}</p>
                                    ) : (
                                        <div className="flex flex-col items-center justify-center h-32 text-center">
                                            <span className="text-4xl mb-2 opacity-50">⏳</span>
                                            <p className="text-gray-500 font-medium">{content.question.partner_writing}</p>
                                            <button className="mt-2 text-sm text-primary-coral font-bold hover:underline">
                                                {content.question.nudging} 🔔
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Question;