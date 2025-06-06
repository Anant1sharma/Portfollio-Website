// components/ContactForm.jsx
import { Mail, Send } from "lucide-react";

export default function ContactForm() {
  return (
    <section id="contact" className="py-16 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Contact Me</h2>

        <form className="bg-zinc-900 p-8 rounded-2xl shadow-lg space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-zinc-300">
                Name
              </label>
              <input
                type="text"
                className="w-full p-3 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-zinc-300">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-zinc-300">
              Message
            </label>
            <textarea
              rows="5"
              className="w-full p-3 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-xl hover:bg-teal-600 transition duration-300 hover:scale-105 hover:shadow-teal-500/30"
          >
            <Send className="w-5 h-5" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
