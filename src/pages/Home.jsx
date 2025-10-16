import React from 'react';
import { Link } from 'react-router-dom';
import SectionCard from '../components/SectionCard';

export default function Home() {
  return (
    <>
      <section className="bg-[url('https://images.unsplash.com/photo-1523246191808-8bdeb4b6a72a?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center">
        <div className="bg-black/40">
          <div className="container py-20 md:py-28 text-white">
            <h1 className="h1 text-white">Empowering Leaders. Transforming Organizations. Driving Results.</h1>
            <p className="lead mt-4 text-slate-100 max-w-2xl">Foreleads Leadership Consulting helps technology and government leaders achieve operational excellence and organizational transformation through evidence-based leadership strategies.</p>
            <div className="mt-6 flex gap-3">
              <Link to="/contact" className="btn btn-primary">Schedule a Consultation</Link>
              <Link to="/services" className="btn btn-outline">Explore Our Services</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-12">
        <p className="lead max-w-3xl"><span className="font-semibold">Founded by Dr. Anthony Foreman</span>, Foreleads Leadership Consulting brings over two decades of executive IT and organizational leadership experience to every engagement.</p>
      </section>
      <section className="container pb-12">
        <h2 className="h2">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <SectionCard title="IT Leadership Consulting">Advisory, coaching, and frameworks that bridge strategy and execution.</SectionCard>
          <SectionCard title="Government Leadership Development">Programs and coaching tailored for public-sector leaders and teams.</SectionCard>
          <SectionCard title="Organizational Transformation & Change">Readiness, strategy, communications, and execution support.</SectionCard>
        </div>
      </section>
      <section className="bg-slate-50">
        <div className="container py-12">
          <blockquote className="text-xl font-semibold text-slate-900 max-w-3xl">“Dr. Foreman’s approach to leadership transforms how teams think, perform, and lead.”</blockquote>
        </div>
      </section>
      <section className="container py-12">
        <div className="card p-6 flex items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Ready to elevate your leadership impact?</h3>
            <p className="text-slate-600">Let’s talk.</p>
          </div>
          <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}
