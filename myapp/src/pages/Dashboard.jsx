import { Link } from 'react-router-dom'
import content from '../content.yaml'

const Dashboard = () => {

    const nextAnniversary = {
        name: '두근 두근 800일',
        date: '2026-03-01',
        daysLeft: 10,
    }

    const quickActions = [
        { icon: '📅', label: content.dashboard.quick_actions.add_anniversary, path: '/timeline', color: 'bg-primary-coral/10 text-primary-coral hover:bg-primary-coral hover:text-white' },
        { icon: '📸', label: content.dashboard.quick_actions.record_memory, path: '/gallery', color: 'bg-primary-blue/10 text-primary-blue hover:bg-primary-blue hover:text-white' },
        { icon: '💌', label: content.dashboard.quick_actions.write_letter, path: '/letter', color: 'bg-primary-green/10 text-primary-green hover:bg-primary-green hover:text-white' },
        { icon: '💬', label: content.dashboard.quick_actions.ai_question, path: '/chat', color: 'bg-primary-purple/10 text-primary-purple hover:bg-primary-purple hover:text-white' },
    ]

    //dummy data
    const recentMemories = [
        {
            id: 1,
            title: '첫 데이트',
            date: '2024.01.20',
            image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80',
            description: '뮤지컬 보고 맛있는 저녁 먹었던 날'
        },
        {
            id: 2,
            title: '벚꽃 구경',
            date: '2024.04.05',
            image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&q=80',
            description: '여의도에서 함께 본 벚꽃'
        },
        {
            id: 3,
            title: '제주도 여행',
            date: '2024.07.15',
            image: 'https://images.unsplash.com/photo-1540206395-688085723adb?auto=format&fit=crop&q=80',
            description: '3박 4일 제주도 여행의 추억'
        },
        {
            id: 4,
            title: '크리스마스',
            date: '2024.12.25',
            image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&q=80',
            description: '함께 보낸 첫 크리스마스'
        }
    ];

    const dailyQuestion = {
        id: 101,
        question: "만약 우리가 처음 만난 날로 돌아간다면,\n꼭 다시 하고 싶은 것은 무엇인가요?",
        answerCount: 1, // 파트너가 답변했는지 여부
        isAnswered: false
    };

    const emotionWeather = {
        status: '맑음',
        icon: '☀️',
        temperature: '36.5°C',
        description: content.dashboard.emotion_weather.default_desc,
        trend: 'up' // up, down, stable
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 fade-in">
            {/* Header */}
            <header className="mb-8 text-center md:text-left flex justify-between items-end">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-primary-coral to-accent-rose bg-clip-text text-transparent">
                        {content.app.welcome}👋
                    </h1>
                    <p className="text-lg text-gray-500">{content.app.greeting}</p>
                </div>
                <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    <span className="text-sm text-gray-500 font-medium">AI 비서가 대기중입니다</span>
                </div>
            </header>

            {/* Top Section: Hero + Emotion Weather */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
                {/* Anniversary Countdown - Hero Card */}
                <div className="lg:col-span-8 relative group overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary-coral to-accent-rose shadow-xl shadow-primary-coral/30 hover:shadow-2xl hover:shadow-primary-coral/40 transition-all duration-500">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                    <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors duration-500" />

                    <div className="relative z-10 p-8 md:p-12 text-white h-full flex flex-col justify-between min-h-[300px]">
                        <div className="flex items-start justify-between">
                            <div>
                                <span className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-sm font-bold mb-4 border border-white/10">
                                    {content.dashboard.next_anniversary}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold mb-1">{nextAnniversary.name}</h2>
                                <p className="text-white/80 text-lg font-medium">{nextAnniversary.date}</p>
                            </div>
                            <div className="hidden md:block text-7xl animate-pulse-slow drop-shadow-lg">💕</div>
                        </div>

                        <div className="mt-8">
                            <div className="flex items-baseline gap-2">
                                <span className="text-7xl md:text-8xl font-bold tracking-tighter drop-shadow-md">
                                    {nextAnniversary.daysLeft}
                                </span>
                                <span className="text-2xl md:text-3xl font-medium opacity-90">{content.dashboard.days_left}</span>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Right Column: Emotion Weather + Quick Actions */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                    {/* Emotion Weather Widget */}
                    <div className="bg-white rounded-[2.5rem] p-8 shadow-card border border-white/50 relative overflow-hidden group hover:shadow-float transition-all duration-300">
                        <div className="absolute top-0 right-0 p-6 opacity-10 text-9xl group-hover:scale-110 transition-transform duration-500 select-none">
                            {emotionWeather.icon}
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-gray-500 font-medium mb-4 flex items-center gap-2">
                                <span>{content.dashboard.emotion_weather.title}</span>
                            </h3>
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-6xl">{emotionWeather.icon}</span>
                                <div>
                                    <p className="text-3xl font-bold text-gray-800">{emotionWeather.status}</p>
                                    <p className="text-primary-coral font-bold text-lg flex items-center gap-1">
                                        {emotionWeather.temperature}
                                        <span className="text-xs bg-red-100 text-red-500 px-1.5 py-0.5 rounded-full">▲</span>
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed bg-gray-50 p-3 rounded-xl">
                                "{emotionWeather.description}"
                            </p>
                        </div>
                    </div>

                    {/* Quick Actions (Compact) */}
                    <div className="grid grid-cols-2 gap-3 flex-1">
                        {quickActions.map((action, index) => (
                            <Link
                                key={index}
                                to={action.path}
                                className={`flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-300 group ${action.color}`}
                            >
                                <span className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300 filter drop-shadow-sm">
                                    {action.icon}
                                </span>
                                <span className="font-bold text-sm">{action.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Middle Section: AI Daily Question */}
            <section className="mb-12">
                <div className="bg-gradient-to-r from-secondary-cream to-white rounded-[2rem] p-1 border border-white shadow-card">
                    <div className="bg-white/50 backdrop-blur-sm rounded-[1.8rem] p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-primary-coral to-accent-lavender flex items-center justify-center text-4xl shadow-lg shrink-0 animate-bounce">
                            💌
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
                                <span className="px-3 py-1 rounded-full bg-primary-coral text-white text-xs font-bold uppercase tracking-wider">
                                    {content.dashboard.daily_question.title}
                                </span>
                                <span className="text-gray-400 text-sm">#101번째 질문</span>
                            </div>
                            <h3 className="text-1xl md:text-2xl font-bold text-gray-800 mb-4 whitespace-pre-line leading-tight">
                                {dailyQuestion.question}
                            </h3>
                            <div className="flex items-center gap-4 justify-center md:justify-start">
                                <div className="flex -space-x-3">
                                    <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200" title="Partner (Answered)" />
                                    <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-gray-400 text-xs" title="You (Waiting)">Me</div>
                                </div>
                                <p className="text-sm text-gray-500">
                                    <span className="font-bold text-primary-coral">파트너</span>가 답변했습니다. 확인해보세요!
                                </p>
                            </div>
                        </div>
                        <Link to="/question" className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-black hover:scale-105 transition-all shadow-lg flex items-center gap-2 whitespace-nowrap">
                            <span>{content.dashboard.daily_question.submit_btn}</span>
                            <span>✏️</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="mb-12">
                <div className="flex justify-between items-end mb-8 px-2">
                    <div>
                        <h3 className="text-3xl font-bold text-gray-800 mb-2">{content.dashboard.gallery.title}</h3>
                        <p className="text-gray-500">{content.dashboard.gallery.subtitle}</p>
                    </div>
                    <Link
                        to="/timeline"
                        className="text-primary-coral font-bold hover:text-accent-rose transition-colors flex items-center gap-2 group"
                    >
                        {content.dashboard.gallery.view_all}
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {recentMemories.map((memory, index) => (
                        <div
                            key={memory.id}
                            className={`group relative rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer ${index === 0 ? 'md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto' : 'aspect-square'
                                }`}
                        >
                            <img
                                src={memory.image}
                                alt={memory.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <span className="text-primary-coral font-bold text-sm mb-2 uppercase tracking-wider">
                                    {memory.date}
                                </span>
                                <h4 className="text-white text-2xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {memory.title}
                                </h4>
                                <p className="text-white/80 line-clamp-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                    {memory.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Dashboard