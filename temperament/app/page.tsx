"use client"
import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

type TemperamentType = 'sanguine' | 'choleric' | 'melancholic' | 'phlegmatic';

interface Scores {
  sanguine: number;
  choleric: number;
  melancholic: number;
  phlegmatic: number;
}

const TemperamentQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, TemperamentType>>({});
  const [showResults, setShowResults] = useState(false);
  const [scores, setScores] = useState<Scores>({ sanguine: 0, choleric: 0, melancholic: 0, phlegmatic: 0 });

  const questions = [
    {
      q: "At a party, you are most likely to:",
      options: [
        { text: "Be the center of attention, talking to everyone", type: "sanguine" as TemperamentType },
        { text: "Take charge and organize activities", type: "choleric" as TemperamentType },
        { text: "Have deep conversations with a few people", type: "melancholic" as TemperamentType },
        { text: "Relax and observe, going with the flow", type: "phlegmatic" as TemperamentType }
      ]
    },
    {
      q: "When facing a problem, you tend to:",
      options: [
        { text: "Stay optimistic and look for fun solutions", type: "sanguine" as TemperamentType },
        { text: "Take immediate action and solve it quickly", type: "choleric" as TemperamentType },
        { text: "Analyze it thoroughly before acting", type: "melancholic" as TemperamentType },
        { text: "Stay calm and wait for it to resolve naturally", type: "phlegmatic" as TemperamentType }
      ]
    },
    {
      q: "Your workspace is usually:",
      options: [
        { text: "Colorful and full of fun items", type: "sanguine" as TemperamentType },
        { text: "Efficient and goal-focused", type: "choleric" as TemperamentType },
        { text: "Neat, organized, and detailed", type: "melancholic" as TemperamentType },
        { text: "Comfortable and relaxed", type: "phlegmatic" as TemperamentType }
      ]
    },
    {
      q: "When making decisions, you:",
      options: [
        { text: "Go with your gut feeling and excitement", type: "sanguine" as TemperamentType },
        { text: "Decide quickly and confidently", type: "choleric" as TemperamentType },
        { text: "Consider all details and possible outcomes", type: "melancholic" as TemperamentType },
        { text: "Take your time and avoid rushing", type: "phlegmatic" as TemperamentType }
      ]
    },
    {
      q: "In a group project, you prefer to:",
      options: [
        { text: "Keep everyone energized and motivated", type: "sanguine" as TemperamentType },
        { text: "Lead and delegate tasks", type: "choleric" as TemperamentType },
        { text: "Focus on quality and perfection", type: "melancholic" as TemperamentType },
        { text: "Support others and maintain harmony", type: "phlegmatic" as TemperamentType }
      ]
    },
    {
      q: "Your friends would describe you as:",
      options: [
        { text: "Fun, spontaneous, and outgoing", type: "sanguine" as TemperamentType },
        { text: "Strong, confident, and ambitious", type: "choleric" as TemperamentType },
        { text: "Thoughtful, loyal, and sensitive", type: "melancholic" as TemperamentType },
        { text: "Easy-going, patient, and kind", type: "phlegmatic" as TemperamentType }
      ]
    },
    {
      q: "When stressed, you:",
      options: [
        { text: "Talk to friends and seek distraction", type: "sanguine" as TemperamentType },
        { text: "Become more focused and determined", type: "choleric" as TemperamentType },
        { text: "Withdraw and overthink things", type: "melancholic" as TemperamentType },
        { text: "Try to avoid conflict and stay calm", type: "phlegmatic" as TemperamentType }
      ]
    },
    {
      q: "Your ideal weekend involves:",
      options: [
        { text: "Social events and exciting activities", type: "sanguine" as TemperamentType },
        { text: "Accomplishing goals and being productive", type: "choleric" as TemperamentType },
        { text: "Pursuing hobbies and personal projects", type: "melancholic" as TemperamentType },
        { text: "Relaxing and spending quiet time", type: "phlegmatic" as TemperamentType }
      ]
    }
  ];

  const temperamentInfo: Record<TemperamentType, {
    name: string;
    subtitle: string;
    color: string;
    description: string;
    strengths: string;
    challenges: string;
  }> = {
    sanguine: {
      name: "Sanguine",
      subtitle: "The Social Butterfly",
      color: "bg-yellow-400",
      description: "You are outgoing, enthusiastic, and love being around people! You're optimistic, spontaneous, and bring energy to every room.",
      strengths: "Charismatic, Creative, Fun-loving, Optimistic",
      challenges: "Can be impulsive, disorganized, or struggle with follow-through"
    },
    choleric: {
      name: "Choleric",
      subtitle: "The Natural Leader",
      color: "bg-red-500",
      description: "You are goal-oriented, confident, and born to lead! You're decisive, ambitious, and get things done efficiently.",
      strengths: "Strong-willed, Confident, Efficient, Logical",
      challenges: "Can be domineering, impatient, or insensitive"
    },
    melancholic: {
      name: "Melancholic",
      subtitle: "The Thoughtful Perfectionist",
      color: "bg-blue-500",
      description: "You are analytical, detail-oriented, and a deep thinker! You're thoughtful, loyal, and strive for perfection.",
      strengths: "Organized, Creative, Sensitive, Loyal",
      challenges: "Can be pessimistic, moody, or overly critical"
    },
    phlegmatic: {
      name: "Phlegmatic",
      subtitle: "The Peaceful Peacemaker",
      color: "bg-green-500",
      description: "You are calm, easy-going, and an excellent mediator! You're patient, reliable, and bring peace to those around you.",
      strengths: "Diplomatic, Patient, Stable, Compassionate",
      challenges: "Can be passive, unmotivated, or resistant to change"
    }
  };

  const handleAnswer = (type: TemperamentType) => {
    const newAnswers = { ...answers, [currentQuestion]: type };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults(newAnswers);
    }
  };

  const calculateResults = (finalAnswers: Record<number, TemperamentType>) => {
    const tempScores: Scores = { sanguine: 0, choleric: 0, melancholic: 0, phlegmatic: 0 };
    
    Object.values(finalAnswers).forEach(answer => {
      tempScores[answer]++;
    });

    setScores(tempScores);
    setShowResults(true);
  };

  const getDominantType = (): TemperamentType => {
    return (Object.entries(scores) as [TemperamentType, number][]).reduce((max, [type, score]) => 
      score > scores[max] ? type : max
    , 'sanguine' as TemperamentType);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setScores({ sanguine: 0, choleric: 0, melancholic: 0, phlegmatic: 0 });
  };

  if (showResults) {
    const dominantType = getDominantType();
    const result = temperamentInfo[dominantType];

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <div className={`inline-block ${result.color} text-white px-6 py-3 rounded-full text-2xl font-bold mb-4`}>
                Your Result
              </div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">{result.name}</h1>
              <p className="text-xl text-gray-600 italic">{result.subtitle}</p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-800">About You:</h3>
                <p className="text-gray-700">{result.description}</p>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2 text-green-800">Your Strengths:</h3>
                <p className="text-gray-700">{result.strengths}</p>
              </div>

              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2 text-orange-800">Areas for Growth:</h3>
                <p className="text-gray-700">{result.challenges}</p>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3 text-gray-800">Your Score Breakdown:</h3>
                <div className="space-y-2">
                  {(Object.entries(scores) as [TemperamentType, number][]).map(([type, score]) => {
                    const tempInfo = temperamentInfo[type];
                    return (
                      <div key={type} className="flex items-center gap-3">
                        <span className="w-32 capitalize font-medium">{type}:</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-6">
                          <div 
                            className={`h-6 rounded-full ${tempInfo.color} transition-all duration-500`}
                            style={{ width: `${(score / questions.length) * 100}%` }}
                          ></div>
                        </div>
                        <span className="font-bold w-12">{score}/{questions.length}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6 text-center">
                <p className="text-gray-700 mb-2">
                  <strong>Remember:</strong> Most people are a blend of multiple temperaments!
                </p>
                <p className="text-gray-600 text-sm">
                  Your dominant type is {result.name}, but you likely have traits from other types too.
                </p>
              </div>
            </div>

            <button
              onClick={restartQuiz}
              className="w-full mt-8 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4 rounded-lg font-bold text-lg hover:from-purple-600 hover:to-blue-600 transition-all"
            >
              Take Quiz Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Temperament Quiz</h2>
              <span className="text-sm font-medium text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
                Question {currentQuestion + 1} of {questions.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              {questions[currentQuestion].q}
            </h3>

            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.type)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all hover:border-purple-500 hover:bg-purple-50 ${
                    answers[currentQuestion] === option.type 
                      ? 'border-purple-500 bg-purple-50' 
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      answers[currentQuestion] === option.type 
                        ? 'border-purple-500 bg-purple-500' 
                        : 'border-gray-300'
                    }`}>
                      {answers[currentQuestion] === option.type && (
                        <CheckCircle className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <span className="text-gray-700">{option.text}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {currentQuestion > 0 && (
            <button
              onClick={() => setCurrentQuestion(currentQuestion - 1)}
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              ← Previous Question
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TemperamentQuiz;