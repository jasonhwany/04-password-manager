"use client";
import { useState, useCallback } from "react";

const CHARS = { upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", lower: "abcdefghijklmnopqrstuvwxyz", numbers: "0123456789", symbols: "!@#$%^&*()-_=+[]{}|;:,.<>?" };
const LABEL = { upper: "대문자 A-Z", lower: "소문자 a-z", numbers: "숫자 0-9", symbols: "특수문자 !@#" };

export default function PasswordGeneratorClient() {
  const [length, setLength] = useState(16);
  const [opts, setOpts] = useState({ upper: true, lower: true, numbers: true, symbols: false });
  const [count, setCount] = useState(1);
  const [pws, setPws] = useState<string[]>([]);
  const [copied, setCopied] = useState<number | null>(null);

  const gen = useCallback(() => {
    let cs = "";
    if (opts.upper) cs += CHARS.upper;
    if (opts.lower) cs += CHARS.lower;
    if (opts.numbers) cs += CHARS.numbers;
    if (opts.symbols) cs += CHARS.symbols;
    if (!cs) return;
    const result: string[] = [];
    for (let i = 0; i < count; i++) {
      const arr = new Uint32Array(length);
      crypto.getRandomValues(arr);
      result.push(Array.from(arr).map(n => cs[n % cs.length]).join(""));
    }
    setPws(result);
  }, [length, opts, count]);

  const copy = (pw: string, idx: number) => {
    navigator.clipboard.writeText(pw);
    setCopied(idx);
    setTimeout(() => setCopied(null), 1500);
  };

  const strength = (pw: string) => {
    if (!pw) return null;
    const s = [/[A-Z]/, /[a-z]/, /[0-9]/, /[^A-Za-z0-9]/].filter(r => r.test(pw)).length + (pw.length >= 16 ? 1 : 0);
    return s <= 2 ? { label: "약함", color: "bg-red-500", pct: "25%" }
      : s <= 3 ? { label: "보통", color: "bg-yellow-500", pct: "50%" }
      : s <= 4 ? { label: "강함", color: "bg-blue-500", pct: "75%" }
      : { label: "매우 강함", color: "bg-emerald-500", pct: "100%" };
  };

  return (
    <div className="max-w-lg mx-auto pt-10">
      <div className="text-center mb-8">
        <div className="text-5xl mb-3">🔐</div>
        <h1 className="text-3xl font-bold tracking-tight">비밀번호 생성기</h1>
        <p className="text-gray-400 mt-1 text-sm">Password Generator</p>
      </div>

      <div className="bg-gray-900 rounded-2xl p-6 space-y-5">
        <div>
          <label className="flex justify-between text-sm mb-2">
            <span>비밀번호 길이</span>
            <span className="text-emerald-400 font-mono font-bold">{length}자</span>
          </label>
          <input type="range" min="6" max="64" value={length} onChange={e => setLength(+e.target.value)} className="w-full accent-emerald-500" />
          <div className="flex justify-between text-xs text-gray-600 mt-0.5"><span>6</span><span>64</span></div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {(Object.keys(opts) as (keyof typeof opts)[]).map(k => (
            <label key={k} className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${opts[k] ? "border-emerald-500 bg-emerald-500/10" : "border-gray-700 hover:border-gray-600"}`}>
              <input type="checkbox" checked={opts[k]} onChange={() => setOpts(o => ({ ...o, [k]: !o[k] }))} className="w-4 h-4 accent-emerald-500" />
              <span className="text-sm">{LABEL[k]}</span>
            </label>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-400 whitespace-nowrap">생성 개수</span>
          <input type="number" min="1" max="20" value={count} onChange={e => setCount(Math.min(20, Math.max(1, +e.target.value)))}
            className="w-20 bg-gray-800 border border-gray-700 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-emerald-500" />
        </div>

        <button onClick={gen}
          className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold py-3 rounded-xl transition-colors">
          비밀번호 생성
        </button>
      </div>

      {pws.length > 0 && (
        <div className="mt-4 bg-gray-900 rounded-2xl p-5 space-y-2.5">
          {pws.map((pw, i) => {
            const s = strength(pw);
            return (
              <div key={i} className="space-y-1.5">
                <div className="flex items-center gap-2 bg-gray-800 rounded-xl px-4 py-3">
                  <span className="flex-1 font-mono text-sm break-all leading-relaxed">{pw}</span>
                  <button onClick={() => copy(pw, i)}
                    className="text-xs bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors">
                    {copied === i ? "✓" : "복사"}
                  </button>
                </div>
                {s && (
                  <div className="flex items-center gap-2 px-1">
                    <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full transition-all ${s.color}`} style={{ width: s.pct }} />
                    </div>
                    <span className="text-xs text-gray-400 w-16 text-right">{s.label}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      <p className="text-center text-xs text-gray-600 mt-10">
        <a href="https://moneystom7.com" className="hover:text-gray-400 transition-colors">← MoneyStom7 홈으로</a>
      </p>
    </div>
  );
}
