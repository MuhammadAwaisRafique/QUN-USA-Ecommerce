import React from 'react';
import { ArrowLeft, Shield, Clock, CheckCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Shield className="h-16 w-16 mx-auto mb-4 text-blue-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund & Return Policy</h1>
            <p className="text-xl text-blue-100">
              Your satisfaction is our priority - clear and fair return terms
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Policy Overview */}
          <div className="bg-blue-50 p-8 border-b border-blue-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Policy Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              At QunUsa, we stand behind the quality of our products and want you to be completely satisfied with your purchase. 
              This comprehensive refund and return policy outlines our commitment to customer satisfaction and the procedures 
              for returns, exchanges, and refunds.
            </p>
          </div>

          <div className="p-8 space-y-8">
            {/* Return Period */}
            <section>
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Return Period</h3>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-gray-700">
                  <strong>15-Day Return Window:</strong> You have 15 days from the date of delivery to initiate a return. 
                  This return period allows you to thoroughly test and evaluate your purchase.
                </p>
              </div>
            </section>

            {/* Eligible Items */}
            <section>
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Eligible for Return</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Items in original, unopened packaging</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Products with all original accessories and documentation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Items in new, unused condition</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Computer hardware and electronics (if unopened)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Mobile accessories in original condition</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Home appliances (subject to inspection)</span>
                </li>
              </ul>
            </section>

            {/* Non-Eligible Items */}
            <section>
              <div className="flex items-center mb-4">
                <XCircle className="h-6 w-6 text-red-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Non-Returnable Items</h3>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Medical equipment (for hygiene and safety reasons)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Personal care items that have been opened or used</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Software or digital products once activated</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Items damaged by misuse or normal wear</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">Products without original receipt or order confirmation</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Return Process */}
            <section>
              <h3 className="text-xl font-bold text-gray-800 mb-4">How to Return Items</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold text-blue-600">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Contact Us</h4>
                  <p className="text-sm text-gray-600">Call +1 (413) 474-8410 or email qunusallc@gmail.com to initiate your return</p>
                </div>
                
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold text-blue-600">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Get Authorization</h4>
                  <p className="text-sm text-gray-600">Receive your Return Authorization Number (RAN) and return instructions</p>
                </div>
                
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold text-blue-600">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Ship Items</h4>
                  <p className="text-sm text-gray-600">Package items securely and ship using the provided return label</p>
                </div>
              </div>
            </section>

            {/* Refund Information */}
            <section>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Refund Processing</h3>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <strong className="text-gray-800 w-32 flex-shrink-0">Processing Time:</strong>
                    <span className="text-gray-700">5-7 business days after we receive your return</span>
                  </div>
                  <div className="flex items-start">
                    <strong className="text-gray-800 w-32 flex-shrink-0">Refund Method:</strong>
                    <span className="text-gray-700">Original payment method or store credit</span>
                  </div>
                  <div className="flex items-start">
                    <strong className="text-gray-800 w-32 flex-shrink-0">Inspection:</strong>
                    <span className="text-gray-700">All returns are inspected for condition and completeness</span>
                  </div>
                  <div className="flex items-start">
                    <strong className="text-gray-800 w-32 flex-shrink-0">Restocking Fee:</strong>
                    <span className="text-gray-700">No restocking fee for returns in original condition</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Exchange Policy */}
            <section>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Exchange Policy</h3>
              <p className="text-gray-700 mb-4">
                We offer exchanges for defective items or if you received the wrong product. Exchanges are subject to product availability.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-gray-700">
                  <strong>Defective Items:</strong> If you receive a defective product, we will exchange it at no cost to you, 
                  including return shipping. Please contact us immediately upon discovering the defect.
                </p>
              </div>
            </section>

            {/* Warranty Information */}
            <section>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Warranty Coverage</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Manufacturer Warranty</h4>
                  <p className="text-sm text-gray-600">
                    Most products come with manufacturer warranty. Warranty terms vary by product and manufacturer.
                  </p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Extended Protection</h4>
                  <p className="text-sm text-gray-600">
                    Optional extended warranty plans available for electronics and appliances at time of purchase.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Need Help?</h3>
              <p className="text-gray-700 mb-4">
                Our customer service team is here to assist you with any questions about returns or refunds.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <strong className="text-gray-800">Phone:</strong>
                  <p className="text-gray-700">+1 (413) 474-8410</p>
                  <p className="text-sm text-gray-600">Mon-Fri 9AM-6PM EST</p>
                </div>
                <div>
                  <strong className="text-gray-800">Email:</strong>
                  <p className="text-gray-700">qunusallc@gmail.com</p>
                  <p className="text-sm text-gray-600">24-hour response time</p>
                </div>
              </div>
            </section>

            {/* Policy Updates */}
            <section className="border-t border-gray-200 pt-6">
              <p className="text-sm text-gray-600">
                <strong>Last Updated:</strong> January 2024. This policy may be updated periodically. 
                Any changes will be posted on this page with an updated revision date.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}