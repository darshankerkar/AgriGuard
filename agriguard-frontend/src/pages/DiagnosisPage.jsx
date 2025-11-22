import React, { useState } from 'react';
import DashboardLayout from '../components/Layouts/DashboardLayout';
import ImageUpload from '../components/Diagnosis/ImageUpload';

const DiagnosisPage = () => {
    const [result, setResult] = useState(null);

    const handleAnalyze = (file) => {
        // Mock API response for now
        // In a real app, you would send the file to the backend here
        const mockResult = {
            disease: 'Early Blight',
            confidence: 96.5,
            status: 'Critical',
            recommendation: 'Apply copper-based fungicide and remove infected leaves immediately.',
            image: URL.createObjectURL(file)
        };
        setResult(mockResult);
    };

    const handleReset = () => {
        setResult(null);
    };

    return (
        <DashboardLayout>
            <div className="mb-8 text-center">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                    AI Plant <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">Diagnosis</span>
                </h1>
                <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                    Upload a photo of your plant to instantly detect diseases and get treatment recommendations.
                </p>
            </div>

            {!result ? (
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 animate-fade-in-up">
                    <ImageUpload onAnalyze={handleAnalyze} />
                </div>
            ) : (
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 animate-fade-in-up">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src={result.image}
                                alt="Analyzed Leaf"
                                className="w-full rounded-2xl shadow-lg object-cover max-h-96"
                            />
                        </div>
                        <div>
                            <div className="mb-6">
                                <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                                    {result.status} Detected
                                </span>
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-2">{result.disease}</h2>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-full bg-gray-100 rounded-full h-3">
                                    <div
                                        className="bg-gradient-to-r from-pink-400 to-yellow-400 h-3 rounded-full"
                                        style={{ width: `${result.confidence}%` }}
                                    ></div>
                                </div>
                                <span className="text-gray-600 font-bold">{result.confidence}% Confidence</span>
                            </div>

                            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                                <h3 className="font-bold text-gray-900 mb-2">Recommendation</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {result.recommendation}
                                </p>
                            </div>

                            <div className="flex gap-4">
                                <button
                                    onClick={handleReset}
                                    className="flex-1 py-3 rounded-xl border-2 border-gray-200 font-bold text-gray-600 hover:bg-gray-50 transition-colors"
                                >
                                    Analyze Another
                                </button>
                                <button className="flex-1 py-3 rounded-xl bg-gray-900 text-white font-bold hover:bg-gray-800 transition-colors">
                                    Save Report
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </DashboardLayout>
    );
};

export default DiagnosisPage;
