"use client"

import { useState, useEffect } from "react"
import {
  Search,
  Download,
  Eye,
  Users,
  CreditCard,
  TrendingUp,
  Calendar,
  FileText,
  ImageIcon,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
} from "lucide-react"

interface StudentRecord {
  id: string
  fullName: string
  email: string
  primaryPhone: string
  secondaryPhone?: string
  dateOfBirth: string
  countryOfCitizenship: string
  referralCode?: string
  residentialAddress: string
  city: string
  state: string
  zipCode: string
  country: string
  highestQualification: string
  specialization?: string
  currentProfession?: string
  currentOrganization?: string
  linkedinProfile?: string
  idType: string
  idNumber: string
  idDocument?: {
    name: string
    type: string
    base64: string
  }
  studentPhoto?: {
    name: string
    type: string
    base64: string
  }
  programType: string
  programName: string
  programDuration: number
  programPriceINR: number
  selectedAddons?: string[]
  addonPriceINR?: number
  invoiceNumber?: string
  subtotalINR: number
  gstRate: number
  totalINR: number
  paymentStatus: string
  razorpayOrderId?: string
  invoiceLink?: string
  whatsappNotifications: boolean
  agreedToTerms: boolean
  certifiedInformation: boolean
  status: string
  registrationSource?: string
  createdAt: string
}

interface PaginationData {
  total: number
  totalPages: number
  page: number
  limit: number
}

const AdminDashboard = () => {
  const [students, setStudents] = useState<StudentRecord[]>([])
  const [filteredStudents, setFilteredStudents] = useState<StudentRecord[]>([])
  const [pagination, setPagination] = useState<PaginationData>({
    total: 0,
    totalPages: 0,
    page: 1,
    limit: 20
  })
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [programFilter, setProgramFilter] = useState("all")
  const [selectedStudent, setSelectedStudent] = useState<StudentRecord | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [showPhotoModal, setShowPhotoModal] = useState(false)
  const [showDocumentModal, setShowDocumentModal] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const fetchStudents = async (page = 1, limit = 20) => {
    try {
      setLoading(true)
      const response = await fetch(`http://localhost:8000/api/v1/admin/?page=${page}&limit=${limit}`)
      console.log("Fetched students data:", response)
      const data = await response.json()
      console.log("Fetched students data:", data)
      if (data.success) {
        setStudents(data.data)
        setFilteredStudents(data.data)
        setPagination(data.pagination)
      } else {
        setError("Failed to fetch student data")
      }
    } catch (error) {
      console.error("Error fetching students:", error)
      setError("Error loading student data")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStudents()
  }, [])

  // Filter students based on search and filters (client-side filtering on current page)
  useEffect(() => {
    let filtered = students

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (student) =>
          student.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          student.razorpayOrderId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          student.invoiceNumber?.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((student) => student.paymentStatus === statusFilter)
    }

    // Program filter
    if (programFilter !== "all") {
      filtered = filtered.filter((student) => student.programType === programFilter)
    }

    setFilteredStudents(filtered)
  }, [searchTerm, statusFilter, programFilter, students])

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      fetchStudents(newPage, pagination.limit)
    }
  }

  const handleLimitChange = (newLimit: number) => {
    fetchStudents(1, newLimit)
  }

  const handleViewDetails = (student: StudentRecord) => {
    setSelectedStudent(student)
    setShowModal(true)
  }

  const handleViewPhoto = (student: StudentRecord) => {
    setSelectedStudent(student)
    setShowPhotoModal(true)
  }

  const handleViewDocument = (student: StudentRecord) => {
    setSelectedStudent(student)
    setShowDocumentModal(true)
  }

  const handleViewInvoice = (student: StudentRecord) => {
    if (student.invoiceLink) {
      window.open(`/invoice/${student.invoiceLink}`, "_blank")
    }
  }

  const handleDownloadDocument = (student: StudentRecord) => {
    if (student.idDocument?.base64) {
      const byteCharacters = atob(student.idDocument.base64)
      const byteNumbers = new Array(byteCharacters.length)
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i)
      }
      const byteArray = new Uint8Array(byteNumbers)
      const blob = new Blob([byteArray], { type: student.idDocument.type || "application/pdf" })

      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = student.idDocument.name || `${student.fullName}_ID_Document.pdf`
      a.click()
      window.URL.revokeObjectURL(url)
    }
  }

  const handleExportData = () => {
    const csvContent = [
      [
        "Invoice Number",
        "Name",
        "Email",
        "Phone",
        "Program Type",
        "Program Name",
        "Duration",
        "Program Price",
        "Add-ons",
        "Add-on Price",
        "Subtotal",
        "GST Rate",
        "Total Amount",
        "Payment Status",
        "Registration Date",
        "City",
        "State",
        "Qualification",
        "Organization",
        "ID Type",
        "ID Number",
        "Date of Birth",
        "Country",
        "Address",
        "Zip Code",
        "WhatsApp",
        "LinkedIn",
        "Referral Code",
        "Invoice Link",
        "Status",
        "Registration Source"
      ],
      ...filteredStudents.map((student) => [
        student.invoiceNumber || "N/A",
        student.fullName,
        student.email,
        student.primaryPhone,
        student.programType,
        student.programName,
        `${student.programDuration} months`,
        `₹${student.programPriceINR.toLocaleString()}`,
        student.selectedAddons?.join(", ") || "None",
        student.addonPriceINR ? `₹${student.addonPriceINR.toLocaleString()}` : "₹0",
        `₹${student.subtotalINR.toLocaleString()}`,
        `${student.gstRate}%`,
        `₹${student.totalINR.toLocaleString()}`,
        student.paymentStatus,
        new Date(student.createdAt).toLocaleDateString(),
        student.city,
        student.state,
        student.highestQualification,
        student.currentOrganization || "N/A",
        student.idType,
        student.idNumber,
        new Date(student.dateOfBirth).toLocaleDateString(),
        student.countryOfCitizenship,
        student.residentialAddress,
        student.zipCode,
        student.whatsappNotifications ? "Yes" : "No",
        student.linkedinProfile || "N/A",
        student.referralCode || "N/A",
        student.invoiceLink ? `${window.location.origin}/invoice/${student.invoiceLink}` : "N/A",
        student.status,
        student.registrationSource || "N/A"
      ]),
    ]
      .map((row) => row.map(cell => `"${cell}"`).join(","))
      .join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `students_data_${new Date().toISOString().split("T")[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const getStatusBadge = (status: string) => {
    const statusStyles = {
      COMPLETED: "bg-green-100 text-green-800",
      completed: "bg-green-100 text-green-800",
      PROCESSING: "bg-yellow-100 text-yellow-800",
      processing: "bg-yellow-100 text-yellow-800",
      pending: "bg-yellow-100 text-yellow-800",
      failed: "bg-red-100 text-red-800",
    }

    const displayStatus = status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()

    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[status as keyof typeof statusStyles] || "bg-gray-100 text-gray-800"}`}
      >
        {displayStatus}
      </span>
    )
  }

  // Calculate stats from all students (would need separate API call for accurate totals)
  const totalRevenue = students
    .filter((s) => s.paymentStatus === "completed" || s.paymentStatus === "COMPLETED")
    .reduce((sum, s) => sum + s.totalINR, 0)
  const completedPayments = students.filter(
    (s) => s.paymentStatus === "completed" || s.paymentStatus === "COMPLETED",
  ).length
  const pendingPayments = students.filter(
    (s) => s.paymentStatus === "pending" || s.paymentStatus === "PROCESSING",
  ).length

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FC4C03] mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading student data...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <p className="text-red-600 text-lg">{error}</p>
              <button
                onClick={() => fetchStudents(pagination.page, pagination.limit)}
                className="mt-4 px-4 py-2 bg-[#FC4C03] text-white rounded-lg hover:bg-[#e63d00] flex items-center space-x-2 mx-auto"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retry</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Students</p>
                <p className="text-2xl font-bold text-gray-900">{pagination.total}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <CreditCard className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Completed Payments</p>
                <p className="text-2xl font-bold text-gray-900">{completedPayments}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Calendar className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Processing Payments</p>
                <p className="text-2xl font-bold text-gray-900">{pendingPayments}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-[#FC4C03] bg-opacity-10 rounded-lg">
                <TrendingUp className="w-6 h-6 text-[#FC4C03]" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Current Page Revenue</p>
                <p className="text-2xl font-bold text-gray-900">₹{totalRevenue.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search students..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent"
                />
              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="COMPLETED">Completed</option>
                <option value="PROCESSING">Processing</option>
                <option value="completed">Completed (Legacy)</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
              </select>

              <select
                value={programFilter}
                onChange={(e) => setProgramFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent"
              >
                <option value="all">All Programs</option>
                <option value="skill">Skill Phase</option>
                <option value="practice">Practice Phase</option>
                <option value="progress">Progress Phase</option>
              </select>

              <select
                value={pagination.limit}
                onChange={(e) => handleLimitChange(Number(e.target.value))}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent"
              >
                <option value={10}>10 per page</option>
                <option value={20}>20 per page</option>
                <option value={50}>50 per page</option>
                <option value={100}>100 per page</option>
              </select>
            </div>

            <button
              onClick={handleExportData}
              className="flex items-center space-x-2 px-4 py-2 bg-[#FC4C03] text-white rounded-lg hover:bg-[#e63d00] transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Export Data</span>
            </button>
          </div>
        </div>

        {/* Students Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Program
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Registration Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Payment Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Documents
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{student.fullName}</div>
                        <div className="text-sm text-gray-500">{student.email}</div>
                        <div className="text-sm text-gray-500">{student.primaryPhone}</div>
                        {student.invoiceNumber && (
                          <div className="text-xs text-blue-600 font-mono">#{student.invoiceNumber}</div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{student.programName}</div>
                      <div className="text-sm text-gray-500">{student.programDuration} months</div>
                      {student.selectedAddons && student.selectedAddons.length > 0 && (
                        
                        <div className="text-sm text-blue-600">+ {student.selectedAddons.join(", ")}</div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">₹{student.totalINR.toLocaleString()}</div>
                      <div className="text-xs text-gray-500">GST: {student.gstRate}%</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(student.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(student.paymentStatus)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-2">
                        {student.studentPhoto && (
                          <button
                            onClick={() => handleViewPhoto(student)}
                            className="text-blue-600 hover:text-blue-800"
                            title="View Photo"
                          >
                            <ImageIcon className="w-4 h-4" />
                          </button>
                        )}
                        {student.idDocument && (
                          <button
                            onClick={() => handleViewDocument(student)}
                            className="text-green-600 hover:text-green-800"
                            title="View ID Document"
                          >
                            <FileText className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleViewDetails(student)}
                          className="flex items-center space-x-1 text-[#FC4C03] hover:text-[#e63d00]"
                        >
                          <Eye className="w-4 h-4" />
                          <span>View</span>
                        </button>
                        {student.invoiceLink && (
                          <button
                            onClick={() => handleViewInvoice(student)}
                            className="flex items-center space-x-1 text-green-600 hover:text-green-800"
                            title="View Invoice"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Invoice</span>
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredStudents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No students found matching your criteria.</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="bg-white rounded-lg shadow p-4 mt-6">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Showing {((pagination.page - 1) * pagination.limit) + 1} to{" "}
              {Math.min(pagination.page * pagination.limit, pagination.total)} of{" "}
              {pagination.total} results
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handlePageChange(pagination.page - 1)}
                disabled={pagination.page <= 1}
                className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <div className="flex space-x-1">
                {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                  let pageNum;
                  if (pagination.totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (pagination.page <= 3) {
                    pageNum = i + 1;
                  } else if (pagination.page >= pagination.totalPages - 2) {
                    pageNum = pagination.totalPages - 4 + i;
                  } else {
                    pageNum = pagination.page - 2 + i;
                  }
                  
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`px-3 py-1 border rounded ${
                        pagination.page === pageNum
                          ? "bg-[#FC4C03] text-white border-[#FC4C03]"
                          : "border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>
              
              <button
                onClick={() => handlePageChange(pagination.page + 1)}
                disabled={pagination.page >= pagination.totalPages}
                className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Student Details Modal */}
        {showModal && selectedStudent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Student Details</h2>
                  <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-gray-600">Full Name</label>
                        <p className="text-gray-900">{selectedStudent.fullName}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Email</label>
                        <p className="text-gray-900">{selectedStudent.email}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Primary Phone</label>
                        <p className="text-gray-900">{selectedStudent.primaryPhone}</p>
                      </div>
                      {selectedStudent.secondaryPhone && (
                        <div>
                          <label className="text-sm font-medium text-gray-600">Secondary Phone</label>
                          <p className="text-gray-900">{selectedStudent.secondaryPhone}</p>
                        </div>
                      )}
                      <div>
                        <label className="text-sm font-medium text-gray-600">Date of Birth</label>
                        <p className="text-gray-900">{new Date(selectedStudent.dateOfBirth).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Citizenship</label>
                        <p className="text-gray-900">{selectedStudent.countryOfCitizenship}</p>
                      </div>
                      {selectedStudent.referralCode && (
                        <div>
                          <label className="text-sm font-medium text-gray-600">Referral Code</label>
                          <p className="text-gray-900">{selectedStudent.referralCode}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Contact & Address */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact & Address</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-gray-600">Address</label>
                        <p className="text-gray-900">{selectedStudent.residentialAddress}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">City</label>
                        <p className="text-gray-900">{selectedStudent.city}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">State</label>
                        <p className="text-gray-900">{selectedStudent.state}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Zip Code</label>
                        <p className="text-gray-900">{selectedStudent.zipCode}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Country</label>
                        <p className="text-gray-900">{selectedStudent.country}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">WhatsApp Notifications</label>
                        <p className="text-gray-900">{selectedStudent.whatsappNotifications ? "Yes" : "No"}</p>
                      </div>
                    </div>
                  </div>

                  {/* Education & Professional */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Education & Professional</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-gray-600">Highest Qualification</label>
                        <p className="text-gray-900">{selectedStudent.highestQualification}</p>
                      </div>
                      {selectedStudent.specialization && (
                        <div>
                          <label className="text-sm font-medium text-gray-600">Specialization</label>
                          <p className="text-gray-900">{selectedStudent.specialization}</p>
                        </div>
                      )}
                      {selectedStudent.currentProfession && (
                        <div>
                          <label className="text-sm font-medium text-gray-600">Current Profession</label>
                          <p className="text-gray-900">{selectedStudent.currentProfession}</p>
                        </div>
                      )}
                      {selectedStudent.currentOrganization && (
                        <div>
                          <label className="text-sm font-medium text-gray-600">Current Organization</label>
                          <p className="text-gray-900">{selectedStudent.currentOrganization}</p>
                        </div>
                      )}
                      {selectedStudent.linkedinProfile && (
                        <div>
                          <label className="text-sm font-medium text-gray-600">LinkedIn</label>
                          <p className="text-gray-900">
                            <a
                              href={selectedStudent.linkedinProfile}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              View Profile
                            </a>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Identity Document */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Identity Document</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-gray-600">ID Type</label>
                        <p className="text-gray-900">{selectedStudent.idType}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">ID Number</label>
                        <p className="text-gray-900">{selectedStudent.idNumber}</p>
                      </div>
                      <div className="flex space-x-2 mt-2">
                        {selectedStudent.studentPhoto && (
                          <button
                            onClick={() => handleViewPhoto(selectedStudent)}
                            className="flex items-center space-x-1 px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200"
                          >
                            <ImageIcon className="w-4 h-4" />
                            <span>View Photo</span>
                          </button>
                        )}
                        {selectedStudent.idDocument && (
                          <>
                            <button
                              onClick={() => handleViewDocument(selectedStudent)}
                              className="flex items-center space-x-1 px-3 py-1 bg-green-100 text-green-700 rounded text-sm hover:bg-green-200"
                            >
                              <FileText className="w-4 h-4" />
                              <span>View Document</span>
                            </button>
                            <button
                              onClick={() => handleDownloadDocument(selectedStudent)}
                              className="flex items-center space-x-1 px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200"
                            >
                              <Download className="w-4 h-4" />
                              <span>Download</span>
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Program Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Program Information</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-gray-600">Program Type</label>
                        <p className="text-gray-900">{selectedStudent.programType}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Program Name</label>
                        <p className="text-gray-900">{selectedStudent.programName}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Duration</label>
                        <p className="text-gray-900">{selectedStudent.programDuration} months</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Program Price</label>
                        <p className="text-gray-900">₹{selectedStudent.programPriceINR.toLocaleString()}</p>
                      </div>
                      {selectedStudent.selectedAddons && selectedStudent.selectedAddons.length > 0 && (
                        <>
                          <div>
                            <label className="text-sm font-medium text-gray-600">Add-ons</label>
                            <p className="text-gray-900">{selectedStudent.selectedAddons.join(", ")}</p>
                          </div>
                          {selectedStudent.addonPriceINR && (
                            <div>
                              <label className="text-sm font-medium text-gray-600">Add-on Price</label>
                              <p className="text-gray-900">₹{selectedStudent.addonPriceINR.toLocaleString()}</p>
                            </div>
                          )}
                        </>
                      )}
                      <div>
                        <label className="text-sm font-medium text-gray-600">Subtotal</label>
                        <p className="text-gray-900">₹{selectedStudent.subtotalINR.toLocaleString()}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">GST Rate</label>
                        <p className="text-gray-900">{selectedStudent.gstRate}%</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Total Amount</label>
                        <p className="text-gray-900 font-semibold">₹{selectedStudent.totalINR.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>

                  {/* Payment Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Information</h3>
                    <div className="space-y-3">
                      {selectedStudent.invoiceNumber && (
                        <div>
                          <label className="text-sm font-medium text-gray-600">Invoice Number</label>
                          <p className="text-gray-900 font-mono text-sm">#{selectedStudent.invoiceNumber}</p>
                        </div>
                      )}
                      <div>
                        <label className="text-sm font-medium text-gray-600">Payment Status</label>
                        <div className="mt-1">{getStatusBadge(selectedStudent.paymentStatus)}</div>
                      </div>
                      {selectedStudent.razorpayOrderId && (
                        <div>
                          <label className="text-sm font-medium text-gray-600">Razorpay Order ID</label>
                          <p className="text-gray-900 font-mono text-sm">{selectedStudent.razorpayOrderId}</p>
                        </div>
                      )}
                      {selectedStudent.invoiceLink && (
                        <div>
                          <label className="text-sm font-medium text-gray-600">Invoice Link</label>
                          <div className="flex items-center space-x-2 mt-1">
                            <p className="text-gray-900 font-mono text-sm break-all">
                              {`${window.location.origin}/invoice/${selectedStudent.invoiceLink}`}
                            </p>
                            <button
                              onClick={() => handleViewInvoice(selectedStudent)}
                              className="flex items-center space-x-1 px-2 py-1 bg-green-100 text-green-700 rounded text-xs hover:bg-green-200"
                            >
                              <ExternalLink className="w-3 h-3" />
                              <span>Open</span>
                            </button>
                          </div>
                        </div>
                      )}
                      <div>
                        <label className="text-sm font-medium text-gray-600">Status</label>
                        <p className="text-gray-900">{selectedStudent.status}</p>
                      </div>
                      {selectedStudent.registrationSource && (
                        <div>
                          <label className="text-sm font-medium text-gray-600">Registration Source</label>
                          <p className="text-gray-900">{selectedStudent.registrationSource}</p>
                        </div>
                      )}
                      <div>
                        <label className="text-sm font-medium text-gray-600">Registration Date</label>
                        <p className="text-gray-900">{new Date(selectedStudent.createdAt).toLocaleString()}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Terms Agreed</label>
                        <p className="text-gray-900">{selectedStudent.agreedToTerms ? "Yes" : "No"}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Information Certified</label>
                        <p className="text-gray-900">{selectedStudent.certifiedInformation ? "Yes" : "No"}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Photo Modal */}
        {showPhotoModal && selectedStudent && selectedStudent.studentPhoto && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Student Photo - {selectedStudent.fullName}</h3>
                  <button onClick={() => setShowPhotoModal(false)} className="text-gray-400 hover:text-gray-600">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="flex justify-center">
                  <img
                    src={`${selectedStudent.studentPhoto.base64}`}
                    alt="Student Photo"
                    className="max-w-full max-h-96 object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Document Modal */}
        {showDocumentModal && selectedStudent && selectedStudent.idDocument && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh]">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">ID Document - {selectedStudent.fullName}</h3>
                  <div className="flex space-x-2">
                    {/* <button
                      onClick={() => handleDownloadDocument(selectedStudent)}
                      className="flex items-center space-x-1 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button> */}
                    <button onClick={() => setShowDocumentModal(false)} className="text-gray-400 hover:text-gray-600">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <iframe
                    src={`${selectedStudent.idDocument.base64}`}
                    className="w-full h-96 border rounded-lg"
                    title="ID Document"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard