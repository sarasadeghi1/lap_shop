import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // در نسخه واقعی، اینجا اطلاعات به سرور ارسال می‌شود
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">تماس با ما</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* اطلاعات تماس */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">اطلاعات تماس</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <FiPhone className="text-primary text-xl" />
                </div>
                <div>
                  <p className="font-semibold">تلفن</p>
                  <p className="text-gray-600">021-12345678</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <FiMail className="text-primary text-xl" />
                </div>
                <div>
                  <p className="font-semibold">ایمیل</p>
                  <p className="text-gray-600">info@lapshop.ir</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <FiMapPin className="text-primary text-xl" />
                </div>
                <div>
                  <p className="font-semibold">آدرس</p>
                  <p className="text-gray-600">تهران، خیابان ولیعصر، پلاک 123</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">ساعات کاری</h3>
            <div className="space-y-2 text-gray-600">
              <p>شنبه تا چهارشنبه: 9:00 - 18:00</p>
              <p>پنج‌شنبه: 9:00 - 14:00</p>
              <p>جمعه: تعطیل</p>
            </div>
          </div>
        </div>

        {/* فرم تماس */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6">ارسال پیام</h2>
          {isSubmitted ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              پیام شما با موفقیت ارسال شد!
            </div>
          ) : null}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">نام و نام خانوادگی</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">ایمیل</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">موضوع</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">پیام</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-blue-600 transition font-semibold"
            >
              ارسال پیام
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

