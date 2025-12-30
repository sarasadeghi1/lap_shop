import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">درباره ما</h1>
      
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">LapShop - فروشگاه آنلاین لپ‌تاپ</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            LapShop یک فروشگاه آنلاین تخصصی در زمینه فروش لپ‌تاپ است که با هدف ارائه بهترین 
            محصولات از برندهای معتبر به مشتریان عزیز تأسیس شده است.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            ما با سال‌ها تجربه در زمینه فناوری و فروش لپ‌تاپ، آماده خدمت‌رسانی به شما هستیم. 
            تمام محصولات ما دارای گارانتی معتبر و اصالت کالا هستند.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">هدف ما</h3>
            <p className="text-gray-600">
              ارائه بهترین لپ‌تاپ‌ها با بهترین قیمت و کیفیت
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-semibold mb-2">ارزش‌های ما</h3>
            <p className="text-gray-600">
              رضایت مشتری، کیفیت و اعتماد
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2">آینده ما</h3>
            <p className="text-gray-600">
              تبدیل شدن به برترین فروشگاه آنلاین لپ‌تاپ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

