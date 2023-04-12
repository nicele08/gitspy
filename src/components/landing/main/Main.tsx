import BlogSection from './BlogSection';
import Contact from './Contact';
import FAQ from './FAQ';
import Features from './Features';
import TeamSection from './Team';
import Testimonials from './Testimonials';
import UIPreview from './UIPreview';

const Main = () => {
  return (
    <main className="flex flex-col items-center">
      <section className="px-8 max-w-7xl py-12">
        <h2 className="text-3xl font-bold mb-8 max-w-4xl mx-auto w-full">
          Discover What&apos;s Possible with GitSpy
        </h2>
        <p className="text-gray-500 text-lg max-w-4xl mx-auto text-justify">
          GitSpy helps you to find the right GitHub repositories,
          issues, and pull requests faster and easier than ever
          before. With GitSpy, you can search, filter, and sort
          through thousands of repositories, issues, and pull requests
          in seconds. GitSpy is the ultimate tool for developers,
          managers, and recruiters who want to stay on top of their
          GitHub game.
        </p>
      </section>
      <Features />
      <UIPreview />
      <Testimonials />
      <TeamSection />
      <BlogSection />
      <FAQ />
      <Contact />
    </main>
  );
};

export default Main;
