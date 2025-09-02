"use client";

import { CircleCheck } from "lucide-react";

export default function InnovationInAction() {
  return (
    <section className="bg-orange-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-balance">
            Innovation In Action
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Showcase case studies */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-orange-500 text-white rounded-full">
                <CircleCheck />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Showcase case studies / demos:
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Work on actual client projects with guaranteed monthly
                  payments.
                </p>
              </div>
            </div>
          </div>

          {/* AI+AR Prototype Videos */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              {" "}
              <div className="bg-orange-500 text-white rounded-full">
                <CircleCheck />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  AI+AR Prototype Videos:
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Get professional guidance to improve your skills with each
                  project.
                </p>
              </div>
            </div>
          </div>

          {/* Grenoa Labs */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-orange-500 text-white rounded-full">
                <CircleCheck />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Grenoa Labs – experimental hub:
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Professional legal protection for your freelance work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
