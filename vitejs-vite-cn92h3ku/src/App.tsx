import React, { useState } from 'react';
import { Share2, RotateCcw, ChevronRight, ExternalLink } from 'lucide-react';

const TipsyPartyTest = () => {
  const [stage, setStage] = useState('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
  
    {
      phase: "Phase 1: 평소의 나 & 친구 관계",
      q: "오랜만에 친구들을 만나는 날!\n약속 장소로 가는 길, 당신의 머릿속은?",
      options: [
        { text: '"오늘 못다 한 얘기 다 털어야지!"\n벌써 입이 간질간질,\n에피소드 장전 완료 🔫', score: 2 },
        { text: '"오랜만이라 좋긴 한데..."\n기 빨릴 생각에\n벌써 집이 그리운 1인 🏠', score: 0 }
      ]
    },
    {
      phase: "Phase 1: 평소의 나 & 친구 관계",
      q: "친구들 사이에서 의견이 갈릴 때,\n당신의 포지션은?",
      options: [
        { text: '"내 말이 맞다니까?"\n논리정연하게 팩트로\n설득하는 리더형 🗣️', score: 2 },
        { text: '"그것도 맞고, 이것도 맞네~"\n싸움은 딱 질색!\n좋게 좋게 넘어가는 평화주의자 🕊️', score: 0 }
      ]
    },
    {
      phase: "Phase 1: 평소의 나 & 친구 관계",
      q: '절친이 "내 친구 데려와도 돼?"라고\n물었다. 당신의 반응은?',
      options: [
        { text: '"오 완전 좋지!\n누구야? 뭐 하는 애야?"\n뉴페이스 등장은 언제나 환영! 🤩', score: 2 },
        { text: '"음... (살짝 고민)"\n어색할까 봐 걱정되지만\n친구를 위해 알겠다고 한다. 😅', score: 0 }
      ]
    },
    {
      phase: "Phase 2: 팁시파티 & 미래 상황",
      q: "[Situation]\n드디어 팁시파티 입장!\n문을 열자마자 힙한 음악과\n낯선 사람들이 보인다.",
      options: [
        { text: "'오 분위기 좀 좋은데?'\n자연스럽게 리듬 타며\n빈자리 스캔 완료. 😎", score: 3 },
        { text: "'어디 앉아야 하지...'\n동공 지진.\n최대한 구석진 자리나\n벽 쪽을 찾는다. 👀", score: 0 }
      ]
    },
    {
      phase: "Phase 2: 팁시파티 & 미래 상황",
      q: '[Situation]\n테이블 토크 시간, 옆 사람이\n"혹시 MBTI가 어떻게 되세요?"\n라고 물었다.',
      options: [
        { text: '"저는 ENFP요! 그쪽은요?"\n기다렸다는 듯 TMI 대방출하며\n꼬리에 꼬리를 무는 대화 시전. 🗣️', score: 3 },
        { text: '"아, 저 ISFP요..."\n짧게 대답하고\n상대가 더 물어봐 주길\n내심 기다린다. 😶', score: 0 }
      ]
    },
    {
      phase: "Phase 2: 팁시파티 & 미래 상황",
      q: '[Situation]\n파티의 하이라이트 게임 시간!\n사회자가 "이거 맞히면\n칵테일 쏩니다!"라고 외쳤다.',
      options: [
        { text: '(벌떡 일어나며)\n"정답!!! 저요!!!"\n일단 손부터 들고 본다.\n상품은 내 거니까. 🙋', score: 3 },
        { text: '옆 사람을 툭 치며 소근거린다.\n"저거 정답 ㅇㅇ 아니에요?\n빨리 손들어봐요!" 🕵️', score: 0 }
      ]
    },
    {
      phase: "Phase 2: 팁시파티 & 미래 상황",
      q: "[Situation]\n모든 파티가 끝나고\n집으로 돌아가는 길,\n당신의 상태는?",
      options: [
        { text: '"오늘 진짜 역대급이었다."\n도파민 풀충전!\n단톡방에 "다들 잘 들어갔어요?"\n안부 톡 날림. 📱', score: 3 },
        { text: '"재밌었지만...\n이제 나만의 시간이 필요해."\n즐거움과 피곤함이 공존,\n이어폰 꽂고 멍 때리기. 🎧', score: 0 }
      ]
    }
  ];

  const results = {
    A: {
      title: "확신의 분위기 메이커\n'인간 리트리버' 🐶",
      subtitle: "평소: 핵인싸 / 팁시파티: MC 꿈나무",
      normal: "친구들 사이에서 없으면 안 되는 존재!\n당신이 빠지면 그날 모임은 노잼 확정이에요.\n사람을 좋아하고 감정 표현에 솔직해서\n주변에 늘 사람이 끊이지 않네요.",
      party: "낯선 사람? 오히려 좋아!\n처음 보는 사람과도 10년지기처럼\n떠드는 미친 친화력을 보여줄 거예요.\n어색한 정적을 못 참아서 계속 말을 걸다 보니,\n파티가 끝날 때쯤엔 이미\n이 구역의 리더가 되어 있을 확률 99%!",
      tip: "너무 분위기를 띄우느라\n본인이 즐기는 걸 놓치지 마세요!\n가끔은 템포를 늦추고 '1:1 대화'에\n집중하면 의외의 설렘을 만날 수도? 💘",
      color: "from-rose-500 via-pink-500 to-fuchsia-500"
    },
    B: {
      title: "판 깔아주면 날아다니는\n'숨겨진 텐션 요정' 🧚",
      subtitle: "평소: 평화주의자 / 팁시파티: 리액션 장인",
      normal: "싸우는 게 제일 싫은 둥글둥글한 성격.\n친구들 이야기를 \"그랬구나~\" 하고\n잘 들어주는 공감 능력 만렙이라\n상담 요청이 많이 들어오는 편이에요.",
      party: "처음엔 살짝 낯을 가리나 싶지만,\n알코올이 한 방울 들어가면 봉인 해제!\n누가 무슨 말을 해도 빵빵 터져주는\n최고의 리액션으로\n상대방을 기분 좋게 만들어요.\n당신 옆자리는 언제나 인기 만점!",
      tip: "남들 챙겨주느라 술잔 비는 줄\n모르면 안 돼요!\n게임 시간에는 숨겨왔던 승부욕을\n보여주세요.\n당신이 적극적으로 변하는 순간,\n반전 매력에 다들 치일지도 몰라요. ✨",
      color: "from-violet-500 via-purple-500 to-indigo-500"
    },
    C: {
      title: "알고 보면 진국\n'볼매(볼수록 매력) 뚝배기' 🍲",
      subtitle: "평소: 마이웨이 / 팁시파티: 시크한 관찰자",
      normal: "내 사람에겐 따뜻하지만\n남에겐 관심 없는 쿨한 성격.\n빈말은 잘 못 하지만,\n툭 던지는 한마디가 뼈를 때리는\n팩폭러 기질이 있어서\n은근히 개그 캐릭터라는 소리를 듣네요.",
      party: "시끄러운 파티 속에서\n고요하게 빛나는 존재감을 발휘해요.\n억지로 텐션을 높이지 않고\n차분하게 대화를 이끌어가서,\n진지한 대화를 원하는 사람들의\n원픽이 될 거예요.\n가벼운 스몰톡보다는\n깊은 대화에서 빛을 발하는 타입!",
      tip: "너무 팔짱 끼고 관찰만 하면\n다가가기 어려울 수 있어요.\n마음에 드는 이성이 있다면\n눈을 3초만 더 마주쳐보세요.\n당신의 그윽한 눈빛 하나면\n게임 끝입니다. 😏",
      color: "from-amber-500 via-orange-500 to-red-500"
    },
    D: {
      title: "멍석 깔아줘야 노는\n'샤이 관종' 🫣",
      subtitle: "평소: 집순이·집돌이 / 팁시파티: 스나이퍼",
      normal: "이불 밖은 위험해!\n혼자 있는 시간을 가장 사랑하지만,\n막상 불러내면 누구보다 잘 노는\n선택적 인싸입니다.\n관심받는 건 좋지만\n너무 주목받는 건 부담스러운\n모순덩어리!",
      party: "초반 30분은 탐색전입니다.\n\"집에 갈까...\" 10번 고민하지만,\n게임이 시작되거나 공통 관심사가 나오면\n눈빛이 변해요.\n조용히 있다가 결정적인 순간에\n빵 터뜨리는 한 방이 있는 스타일!",
      tip: "당신의 매력은 '미스터리함'에 있어요.\n너무 처음부터 모든 걸 보여주지 말고,\n질문을 유도해 보세요.\n당신이 입을 열 때마다\n사람들은 더 궁금해할 거예요. 🤫",
      color: "from-teal-500 via-cyan-500 to-blue-500"
    }
  };

  const calculateResult = () => {
    const totalScore = answers.reduce((sum, score) => sum + score, 0);
    if (totalScore >= 15) return 'A';
    if (totalScore >= 10) return 'B';
    if (totalScore >= 5) return 'C';
    return 'D';
  };

  const handleAnswer = (score) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    } else {
      setTimeout(() => {
        setStage('result');
      }, 300);
    }
  };

  const handleRestart = () => {
    setStage('intro');
    setCurrentQuestion(0);
    setAnswers([]);
  };

  const handleShare = () => {
    const resultType = calculateResult();
    const url = window.location.href + `?result=${resultType}`;
    if (navigator.share) {
      navigator.share({
        title: '팁시파티 본캐/부캐 테스트',
        text: `나는 ${results[resultType].title.replace(/\n/g, ' ')}!`,
        url: url
      });
    } else {
      navigator.clipboard.writeText(url);
      alert('링크가 복사되었습니다!');
    }
  };

  const applyTipsyParty = () => {
    window.open('https://forms.gle/RXA6xYy7XxGZUR6o8', '_blank');
  };

  // Intro Screen
  if (stage === 'intro') {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6">
        <div className="max-w-md w-full">
          <div className="text-center space-y-8">
            {/* Logo Area */}
            <div className="space-y-4">
              <div className="text-7xl mb-6 animate-pulse">🍷</div>
              <div className="text-white/40 text-sm tracking-widest font-light">
                TIPSY PARTY PERSONALITY TEST
              </div>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-white text-4xl font-bold leading-tight">
                나도 몰랐던<br />
                내 안의 '파티 DNA' 찾기
              </h1>
              <p className="text-white/70 text-lg leading-relaxed">
                평소의 나와 팁시파티에서의 나는<br />
                어떻게 다를까?
              </p>
              <p className="text-white/50 text-sm">
                (소름 돋는 정확도 주의 🤫)
              </p>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button 
                onClick={() => setStage('test')}
                className="w-full bg-white text-black font-bold py-5 px-8 rounded-full text-lg hover:bg-white/90 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3 group"
              >
                내 파티 부캐 확인하러 가기
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Footer */}
            <div className="text-white/30 text-xs tracking-wider pt-8">
              tip.
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Test Screen
  if (stage === 'test') {
    const currentQ = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / questions.length) * 100;

    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6">
        <div className="max-w-2xl w-full">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-white/50 text-xs mb-3 tracking-wide">
              <span>{currentQ.phase}</span>
              <span className="font-mono">{currentQuestion + 1} / {questions.length}</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-1">
              <div 
                className="bg-gradient-to-r from-white/50 to-white h-1 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-white text-2xl md:text-3xl font-bold leading-relaxed whitespace-pre-line">
              {currentQ.q}
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-4">
            {currentQ.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option.score)}
                className="w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 text-white p-6 md:p-8 rounded-2xl text-left transition-all transform hover:scale-[1.02] hover:shadow-xl group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-xl font-bold text-white/30 group-hover:text-white/50 transition-colors mt-1">
                    {idx === 0 ? 'A' : 'B'}
                  </span>
                  <span className="flex-1 leading-relaxed whitespace-pre-line text-white/90 group-hover:text-white transition-colors">
                    {option.text}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Back */}
          {currentQuestion > 0 && (
            <button
              onClick={() => {
                setCurrentQuestion(currentQuestion - 1);
                setAnswers(answers.slice(0, -1));
              }}
              className="mt-6 text-white/40 hover:text-white/70 text-sm transition-colors"
            >
              ← 이전 질문으로
            </button>
          )}

          {/* Branding */}
          <div className="text-center mt-12 text-white/20 text-xs tracking-widest">
            tip.
          </div>
        </div>
      </div>
    );
  }

  // Result Screen
  const resultType = calculateResult();
  const result = results[resultType];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        {/* Result Card */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl">
          {/* Header */}
          <div className="text-center mb-10 space-y-4">
            <div className="inline-block px-4 py-2 rounded-full bg-white/10 text-white/60 text-xs tracking-widest mb-4">
              YOUR PARTY TYPE
            </div>
            <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight whitespace-pre-line">
              {result.title}
            </h1>
            <p className="text-white/60 text-sm md:text-base">
              {result.subtitle}
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-6 mb-10">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white/80 text-sm font-bold mb-3 tracking-wide">
                평소의 너는
              </h3>
              <p className="text-white/90 leading-relaxed whitespace-pre-line text-sm md:text-base">
                {result.normal}
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white/80 text-sm font-bold mb-3 tracking-wide">
                팁시파티에 오면
              </h3>
              <p className="text-white/90 leading-relaxed whitespace-pre-line text-sm md:text-base">
                {result.party}
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6">
              <h3 className="text-white text-sm font-bold mb-3 flex items-center gap-2">
                💡 팁시파티 200% 즐기기
              </h3>
              <p className="text-white/90 leading-relaxed whitespace-pre-line text-sm md:text-base">
                {result.tip}
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            {/* Primary CTA - Apply */}
            <button
              onClick={applyTipsyParty}
              className="w-full bg-white text-black font-bold py-5 px-8 rounded-full hover:bg-white/90 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3 group text-base md:text-lg"
            >
              팁시파티 신청하러 가기
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

            {/* Secondary CTAs */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleShare}
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium py-4 px-6 rounded-full transition-all flex items-center justify-center gap-2 text-sm"
              >
                <Share2 className="w-4 h-4" />
                공유하기
              </button>
              <button
                onClick={handleRestart}
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium py-4 px-6 rounded-full transition-all flex items-center justify-center gap-2 text-sm"
              >
                <RotateCcw className="w-4 h-4" />
                다시하기
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 space-y-2">
          <div className="text-white/20 text-xs tracking-widest">
            tip.
          </div>
          <p className="text-white/30 text-xs">
            Where good vibes meet good people
          </p>
        </div>
      </div>
    </div>
  );
};

export default TipsyPartyTest;
