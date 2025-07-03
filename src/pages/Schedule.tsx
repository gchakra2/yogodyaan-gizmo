import { WeeklySchedule } from '../components/Schedule/WeeklySchedule'
import { Button } from '../components/UI/Button'
import { Calendar, Clock, Users } from 'lucide-react'

export function Schedule() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Class Schedule</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Find the perfect class time that fits your schedule. Our regular weekly classes 
            are designed to help you build a consistent yoga practice.
          </p>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WeeklySchedule />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Classes?</h2>
            <p className="text-xl text-gray-600">
              Experience the benefits of structured, regular yoga practice
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
              <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Consistent Schedule</h3>
              <p className="text-gray-600">
                Regular weekly classes help you build a sustainable yoga practice and see real progress.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-green-50 hover:bg-green-100 transition-colors">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Small Groups</h3>
              <p className="text-gray-600">
                Limited class sizes ensure personalized attention and a supportive community atmosphere.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors">
              <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Timing</h3>
              <p className="text-gray-600">
                Multiple time slots throughout the week to accommodate your busy lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Join a Class?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Book your spot in one of our regular classes and start your journey to better health and wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/book-class">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg">
                Book Your Class
              </Button>
            </a>
            <a href="/contact">
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-lg">
                Ask Questions
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}