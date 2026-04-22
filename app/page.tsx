import PasswordGeneratorClient from "@/components/PasswordGeneratorClient";
import Script from "next/script";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "비밀번호 생성기 (Password Generator)",
  url: "https://pass.moneystom7.com",
  description: "강력하고 안전한 비밀번호를 무료로 생성하는 도구",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
  inLanguage: ["ko", "en"],
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 font-sans">
      <Script id="json-ld" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PasswordGeneratorClient />

      <section className="max-w-lg mx-auto mt-16 space-y-10 text-sm text-gray-400 pb-16">
        <div>
          <h2 className="text-white text-base font-semibold mb-3">비밀번호 생성기란?</h2>
          <p>
            비밀번호 생성기(Password Generator)는 대문자, 소문자, 숫자, 특수문자를 조합하여
            해킹하기 어려운 강력한 랜덤 비밀번호를 무료로 생성하는 도구입니다.
            길이 6자부터 64자까지 설정 가능하며, 최대 20개의 비밀번호를 한 번에 생성할 수 있습니다.
            모든 처리는 브라우저에서만 이루어지므로 생성된 비밀번호가 서버에 저장되지 않습니다.
          </p>
        </div>

        <div>
          <h2 className="text-white text-base font-semibold mb-3">강력한 비밀번호 만드는 방법</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong className="text-gray-300">길이</strong> — 최소 16자 이상을 권장합니다. 길수록 안전합니다.</li>
            <li><strong className="text-gray-300">복잡성</strong> — 대문자, 소문자, 숫자, 특수문자를 모두 포함하세요.</li>
            <li><strong className="text-gray-300">고유성</strong> — 사이트마다 다른 비밀번호를 사용하세요.</li>
            <li><strong className="text-gray-300">관리</strong> — 생성된 비밀번호는 안전한 비밀번호 관리자에 저장하세요.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-white text-base font-semibold mb-3">자주 묻는 질문 (FAQ)</h2>
          <dl className="space-y-4">
            <div>
              <dt className="text-gray-300 font-medium">생성된 비밀번호가 서버에 저장되나요?</dt>
              <dd className="mt-1">아니요. 모든 비밀번호 생성은 사용자의 브라우저 내 JavaScript로만 처리됩니다. 생성된 비밀번호는 서버로 전송되지 않으며 완전히 안전합니다.</dd>
            </div>
            <div>
              <dt className="text-gray-300 font-medium">특수문자가 포함된 비밀번호가 항상 좋은가요?</dt>
              <dd className="mt-1">대부분의 경우 특수문자 포함이 보안에 유리하지만, 일부 사이트는 특정 특수문자를 허용하지 않습니다. 특수문자를 포함한 후 해당 사이트에서 허용하는지 확인하세요.</dd>
            </div>
            <div>
              <dt className="text-gray-300 font-medium">몇 자리 비밀번호가 안전한가요?</dt>
              <dd className="mt-1">현재 보안 권고에 따르면 최소 12자 이상, 중요한 계정은 16~20자를 권장합니다. 대소문자+숫자+특수문자 조합의 16자 비밀번호는 현재 컴퓨팅 기술로 해독이 사실상 불가능합니다.</dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
}
