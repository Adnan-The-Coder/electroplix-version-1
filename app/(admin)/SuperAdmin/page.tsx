/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable no-unused-vars */
"use client";

import React, { useState, useEffect } from "react";
import {
  LayoutDashboard,
  FileText,
  Mail,
  BarChart3,
  Settings,
  Menu,
  X,
  LogOut,
  Upload,
  Send,
  Download,
  Trash2,
  Edit,
  Save,
  Eye,
  EyeOff,
} from "lucide-react";

// Types
interface NavItem {
  id: string;
  label: string;
  icon: JSX.Element;
  component: JSX.Element;
}

interface VisitorData {
  id: string;
  ip: string;
  device: string;
  timestamp: string;
  location: string;
  pageViews: number;
}

interface Document {
  id: string;
  name: string;
  size: string;
  uploadDate: string;
  type: string;
}

interface EmailTemplate {
  id: string;
  subject: string;
  content: string;
  niche: string;
  createdAt: string;
}

// Password Protection Component
const PasswordProtection = ({ onAuthenticate }: { onAuthenticate: () => void }) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const ADMIN_PASSWORD = "SUPER_ADMIN@123"; // Change this to your desired password

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      onAuthenticate();
      setError("");
    } else {
      setError("Invalid password. Please try again.");
      setPassword("");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-4">
      <div className="w-full max-w-md rounded-lg border border-gray-800 bg-black p-8 shadow-xl">
        <h1 className="mb-6 text-center text-2xl font-bold text-white">Admin Access</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-white">
              Enter Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-700 bg-black p-3 text-white focus:border-white focus:outline-none"
                placeholder="Enter admin password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
              </button>
            </div>
          </div>
          {error && <p className="text-sm text-red-400">{error}</p>}
          <button
            type="submit"
            className="w-full rounded-lg bg-white py-3 font-medium text-black transition-colors hover:bg-gray-200"
          >
            Access Dashboard
          </button>
        </form>
      </div>
    </div>
  );
};

// Enhanced Dashboard Components
const DashboardOverview = ({ visitors, documents, emails }: any) => {
  const totalVisitors = visitors.length;
  const totalPageViews = visitors.reduce((sum: number, visitor: VisitorData) => sum + visitor.pageViews, 0);
  const totalDocuments = documents.length;
  const totalEmails = emails.length;

  return (
    <div className="p-4 lg:p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">Dashboard Overview</h2>
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-white/10 bg-black/80 p-6 backdrop-blur-lg">
          <h3 className="mb-2 font-semibold text-white/70">Total Visitors</h3>
          <p className="text-3xl font-bold text-white">{totalVisitors}</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-black/80 p-6 backdrop-blur-lg">
          <h3 className="mb-2 font-semibold text-white/70">Page Views</h3>
          <p className="text-3xl font-bold text-white">{totalPageViews}</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-black/80 p-6 backdrop-blur-lg">
          <h3 className="mb-2 font-semibold text-white/70">Documents</h3>
          <p className="text-3xl font-bold text-white">{totalDocuments}</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-black/80 p-6 backdrop-blur-lg">
          <h3 className="mb-2 font-semibold text-white/70">Email Templates</h3>
          <p className="text-3xl font-bold text-white">{totalEmails}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-lg border border-white/10 bg-black/80 p-6 backdrop-blur-lg">
          <h3 className="mb-4 text-lg font-semibold text-white">Recent Activity</h3>
          <div className="space-y-3">
            {visitors.slice(0, 5).map((visitor: VisitorData) => (
              <div key={visitor.id} className="flex items-center justify-between text-sm">
                <span className="text-white/70">{visitor.location}</span>
                <span className="text-white/50">{visitor.timestamp}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-white/10 bg-black/80 p-6 backdrop-blur-lg">
          <h3 className="mb-4 text-lg font-semibold text-white">Quick Actions</h3>
          <div className="space-y-2">
            <button className="w-full rounded-lg border border-white/10 bg-black/80 p-3 text-left text-white transition-colors hover:bg-white/10">
              Upload New Document
            </button>
            <button className="w-full rounded-lg border border-white/10 bg-black/80 p-3 text-left text-white transition-colors hover:bg-white/10">
              Create Email Template
            </button>
            <button className="w-full rounded-lg border border-white/10 bg-black/80 p-3 text-left text-white transition-colors hover:bg-white/10">
              View Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const StrategicPlanning = () => {
  const [plans, setPlans] = useState([
    { id: "1", title: "Q1 Goals", content: "Increase user engagement by 25%", priority: "High" },
    { id: "2", title: "Marketing Strategy", content: "Launch new campaign", priority: "Medium" },
  ]);
  const [newPlan, setNewPlan] = useState({ title: "", content: "", priority: "Medium" });
  const [editingId, setEditingId] = useState<string | null>(null);

  const addPlan = () => {
    if (newPlan.title && newPlan.content) {
      setPlans([...plans, { ...newPlan, id: Date.now().toString() }]);
      setNewPlan({ title: "", content: "", priority: "Medium" });
    }
  };

  const deletePlan = (id: string) => {
    setPlans(plans.filter(plan => plan.id !== id));
  };

  return (
    <div className="p-4 lg:p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">Strategic Planning</h2>
      <div className="mb-6 rounded-lg border border-white/10 bg-black/80 p-6 backdrop-blur-lg">
        <h3 className="mb-4 text-lg font-semibold text-white">Add New Plan</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Plan title..."
            value={newPlan.title}
            onChange={(e) => setNewPlan({...newPlan, title: e.target.value})}
            className="w-full rounded-lg border border-white/10 bg-black/80 p-3 text-white placeholder:text-white/50 focus:border-white/30 focus:outline-none"
          />
          <textarea
            placeholder="Plan details..."
            value={newPlan.content}
            onChange={(e) => setNewPlan({...newPlan, content: e.target.value})}
            className="h-32 w-full resize-none rounded-lg border border-white/10 bg-black/80 p-3 text-white placeholder:text-white/50 focus:border-white/30 focus:outline-none"
          />
          <div className="flex flex-col gap-4 sm:flex-row">
            <select
              value={newPlan.priority}
              onChange={(e) => setNewPlan({...newPlan, priority: e.target.value})}
              className="rounded-lg border border-white/10 bg-black/80 p-3 text-white focus:border-white/30 focus:outline-none"
            >
              <option value="Low">Low Priority</option>
              <option value="Medium">Medium Priority</option>
              <option value="High">High Priority</option>
            </select>
            <button
              onClick={addPlan}
              className="rounded-lg border border-white/10 bg-black/80 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
            >
              <Save className="mr-2 inline size-4" />
              Add Plan
            </button>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        {plans.map((plan) => (
          <div key={plan.id} className="rounded-lg border border-white/10 bg-black/80 p-6 backdrop-blur-lg">
            <div className="mb-4 flex flex-col justify-between sm:flex-row sm:items-center">
              <h3 className="text-lg font-semibold text-white">{plan.title}</h3>
              <div className="mt-2 flex items-center gap-2 sm:mt-0">
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                  plan.priority === 'High' ? 'bg-red-500/20 text-red-300' :
                  plan.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' :
                  'bg-green-500/20 text-green-300'
                }`}>
                  {plan.priority}
                </span>
                <button
                  onClick={() => deletePlan(plan.id)}
                  className="rounded p-2 text-red-400 hover:bg-red-500/10 hover:text-red-300"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
            </div>
            <p className="text-white/70">{plan.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const DocumentUploads = ({ documents, setDocuments }: any) => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFiles = (files: FileList) => {
    Array.from(files).forEach(file => {
      const newDoc: Document = {
        id: Date.now().toString() + Math.random(),
        name: file.name,
        size: (file.size / 1024 / 1024).toFixed(2) + " MB",
        uploadDate: new Date().toLocaleString(),
        type: file.type || "Unknown"
      };
      setDocuments((prev: Document[]) => [...prev, newDoc]);
    });
  };

  const deleteDocument = (id: string) => {
    setDocuments((prev: Document[]) => prev.filter(doc => doc.id !== id));
  };

  return (
    <div className="p-4 lg:p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">Document Management</h2>
      <div
        className={`mb-6 rounded-lg border-2 border-dashed p-8 text-center transition-colors ${
          dragActive ? 'border-white bg-white/5' : 'border-white/10 bg-black/80'
        } backdrop-blur-lg`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <Upload className="mx-auto mb-4 size-12 text-white/50" />
        <p className="mb-2 text-white">Drag and drop files here or</p>
        <input
          type="file"
          multiple
          onChange={(e) => e.target.files && handleFiles(e.target.files)}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="inline-block cursor-pointer rounded-lg border border-white/10 bg-black/80 px-6 py-3 text-white transition-colors hover:bg-white/10"
        >
          Browse Files
        </label>
      </div>
      <div className="rounded-lg border border-white/10 bg-black/80 backdrop-blur-lg">
        <div className="p-6">
          <h3 className="mb-4 text-lg font-semibold text-white">Uploaded Documents</h3>
          {documents.length === 0 ? (
            <p className="text-white/50">No documents uploaded yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-3 text-left text-white/70">Name</th>
                    <th className="hidden py-3 text-left text-white/70 sm:table-cell">Size</th>
                    <th className="hidden py-3 text-left text-white/70 md:table-cell">Type</th>
                    <th className="hidden py-3 text-left text-white/70 lg:table-cell">Upload Date</th>
                    <th className="py-3 text-left text-white/70">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((doc: Document) => (
                    <tr key={doc.id} className="border-b border-white/10">
                      <td className="py-3 text-white">{doc.name}</td>
                      <td className="hidden py-3 text-white/70 sm:table-cell">{doc.size}</td>
                      <td className="hidden py-3 text-white/70 md:table-cell">{doc.type}</td>
                      <td className="hidden py-3 text-white/70 lg:table-cell">{doc.uploadDate}</td>
                      <td className="py-3">
                        <div className="flex gap-2">
                          <button className="rounded p-2 text-white/70 hover:bg-white/10 hover:text-white">
                            <Download className="size-4" />
                          </button>
                          <button
                            onClick={() => deleteDocument(doc.id)}
                            className="rounded p-2 text-red-400 hover:bg-red-500/10 hover:text-red-300"
                          >
                            <Trash2 className="size-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const BulkEmailManagement = ({ emails, setEmails }: any) => {
  const [currentEmail, setCurrentEmail] = useState({
    subject: "",
    content: "",
    niche: "Technology"
  });
  const [selectedNiche, setSelectedNiche] = useState("All");

  const niches = ["Technology", "Marketing", "Development", "Design", "Business"];

  const saveTemplate = () => {
    if (currentEmail.subject && currentEmail.content) {
      const newEmail: EmailTemplate = {
        id: Date.now().toString(),
        subject: currentEmail.subject,
        content: currentEmail.content,
        niche: currentEmail.niche,
        createdAt: new Date().toLocaleString()
      };
      setEmails((prev: EmailTemplate[]) => [...prev, newEmail]);
      setCurrentEmail({ subject: "", content: "", niche: "Technology" });
    }
  };

  const deleteTemplate = (id: string) => {
    setEmails((prev: EmailTemplate[]) => prev.filter(email => email.id !== id));
  };

  const filteredEmails = selectedNiche === "All" 
    ? emails 
    : emails.filter((email: EmailTemplate) => email.niche === selectedNiche);

  return (
    <div className="p-4 lg:p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">Bulk Email Management</h2>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-lg border border-white/10 bg-black/80 p-6 backdrop-blur-lg">
          <h3 className="mb-4 text-lg font-semibold text-white">Create Email Template</h3>
          <div className="space-y-4">
            <select
              value={currentEmail.niche}
              onChange={(e) => setCurrentEmail({...currentEmail, niche: e.target.value})}
              className="w-full rounded-lg border border-white/10 bg-black/80 p-3 text-white focus:border-white/30 focus:outline-none"
            >
              {niches.map(niche => (
                <option key={niche} value={niche}>{niche}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Email subject..."
              value={currentEmail.subject}
              onChange={(e) => setCurrentEmail({...currentEmail, subject: e.target.value})}
              className="w-full rounded-lg border border-white/10 bg-black/80 p-3 text-white placeholder:text-white/50 focus:border-white/30 focus:outline-none"
            />
            <textarea
              placeholder="Email content..."
              value={currentEmail.content}
              onChange={(e) => setCurrentEmail({...currentEmail, content: e.target.value})}
              className="h-48 w-full resize-none rounded-lg border border-white/10 bg-black/80 p-3 text-white placeholder:text-white/50 focus:border-white/30 focus:outline-none"
            />
            <div className="flex gap-2">
              <button
                onClick={saveTemplate}
                className="flex-1 rounded-lg border border-white/10 bg-black/80 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
              >
                <Save className="mr-2 inline size-4" />
                Save
              </button>
              <button className="flex-1 rounded-lg border border-white/10 bg-black/80 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10">
                <Send className="mr-2 inline size-4" />
                Send Email
              </button>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-white/10 bg-black/80 p-6 backdrop-blur-lg">
          <div className="mb-4 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <h3 className="text-lg font-semibold text-white">Email Templates</h3>
            <select
              value={selectedNiche}
              onChange={(e) => setSelectedNiche(e.target.value)}
              className="rounded-lg border border-white/10 bg-black/80 p-2 text-white focus:border-white/30 focus:outline-none"
            >
              <option value="All">All Niches</option>
              {niches.map(niche => (
                <option key={niche} value={niche}>{niche}</option>
              ))}
            </select>
          </div>
          <div className="max-h-96 space-y-4 overflow-y-auto">
            {filteredEmails.length === 0 ? (
              <p className="text-white/50">No templates found.</p>
            ) : (
              filteredEmails.map((email: EmailTemplate) => (
                <div key={email.id} className="rounded-lg border border-white/10 bg-black/80 p-4">
                  <div className="mb-2 flex items-start justify-between">
                    <h4 className="font-medium text-white">{email.subject}</h4>
                    <button
                      onClick={() => deleteTemplate(email.id)}
                      className="rounded p-1 text-red-400 hover:bg-red-500/10 hover:text-red-300"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                  <p className="mb-2 text-sm text-white/50">{email.niche}</p>
                  <p className="truncate text-sm text-white/70">{email.content}</p>
                  <p className="mt-2 text-xs text-white/30">{email.createdAt}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const VisitorAnalytics = ({ visitors }: any) => {
  const [sortBy, setSortBy] = useState("timestamp");
  const [filterLocation, setFilterLocation] = useState("All");

  const uniqueLocations = [...new Set(visitors.map((v: VisitorData) => v.location))] as string[];
  
  const filteredVisitors = filterLocation === "All" 
    ? visitors 
    : visitors.filter((v: VisitorData) => v.location === filterLocation);

  const sortedVisitors = [...filteredVisitors].sort((a, b) => {
    if (sortBy === "timestamp") return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    if (sortBy === "pageViews") return b.pageViews - a.pageViews;
    if (sortBy === "location") return a.location.localeCompare(b.location);
    
    return 0;
  });

  return (
    <div className="p-4 lg:p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">Visitor Analytics</h2>
      <div className="mb-6 rounded-lg border border-white/10 bg-black/80 p-6 backdrop-blur-lg">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-lg border border-white/10 bg-black/80 p-3 text-white focus:border-white/30 focus:outline-none"
          >
            <option value="timestamp">Sort by Date</option>
            <option value="pageViews">Sort by Page Views</option>
            <option value="location">Sort by Location</option>
          </select>
          <select
            value={filterLocation}
            onChange={(e) => setFilterLocation(e.target.value)}
            className="rounded-lg border border-white/10 bg-black/80 p-3 text-white focus:border-white/30 focus:outline-none"
          >
            <option value="All">All Locations</option>
            {uniqueLocations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-3 text-left text-white/70">IP Address</th>
                <th className="hidden py-3 text-left text-white/70 sm:table-cell">Device</th>
                <th className="py-3 text-left text-white/70">Location</th>
                <th className="hidden py-3 text-left text-white/70 md:table-cell">Page Views</th>
                <th className="hidden py-3 text-left text-white/70 lg:table-cell">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {sortedVisitors.map((visitor: VisitorData) => (
                <tr key={visitor.id} className="border-b border-white/10 hover:bg-white/5">
                  <td className="py-3 font-mono text-sm text-white">{visitor.ip}</td>
                  <td className="hidden py-3 text-white/70 sm:table-cell">{visitor.device}</td>
                  <td className="py-3 text-white/70">{visitor.location}</td>
                  <td className="hidden py-3 text-white/70 md:table-cell">{visitor.pageViews}</td>
                  <td className="hidden py-3 text-white/70 lg:table-cell">{visitor.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isMobile, setIsMobile] = useState(false);
  const [visitors, setVisitors] = useState<VisitorData[]>([
    { id: "1", ip: "192.168.1.1", device: "iPhone 13", timestamp: "2024-03-20 10:30", location: "New York", pageViews: 15 },
    { id: "2", ip: "192.168.1.2", device: "Windows PC", timestamp: "2024-03-20 11:15", location: "London", pageViews: 8 },
    { id: "3", ip: "192.168.1.3", device: "MacBook Pro", timestamp: "2024-03-20 12:00", location: "Tokyo", pageViews: 23 },
    { id: "4", ip: "10.0.0.1", device: "Android Phone", timestamp: "2024-03-20 13:45", location: "Paris", pageViews: 12 },
    { id: "5", ip: "172.16.0.1", device: "iPad", timestamp: "2024-03-20 14:20", location: "Sydney", pageViews: 7 },
  ]);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [emails, setEmails] = useState<EmailTemplate[]>([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isAuthenticated) {
    return <PasswordProtection onAuthenticate={() => setIsAuthenticated(true)} />;
  }

  const navItems: NavItem[] = [
    {
      id: "dashboard",
      label: "Dashboard Overview",
      icon: <LayoutDashboard className="size-5" />,
      component: <DashboardOverview visitors={visitors} documents={documents} emails={emails} />,
    },
    {
      id: "planning",
      label: "Strategic Planning",
      icon: <FileText className="size-5" />,
      component: <StrategicPlanning />,
    },
    {
      id: "documents",
      label: "Document Uploads",
      icon: <FileText className="size-5" />,
      component: <DocumentUploads documents={documents} setDocuments={setDocuments} />,
    },
    {
      id: "email",
      label: "Bulk Email",
      icon: <Mail className="size-5" />,
      component: <BulkEmailManagement emails={emails} setEmails={setEmails} />,
    },
    {
      id: "analytics",
      label: "Visitor Analytics",
      icon: <BarChart3 className="size-5" />,
      component: <VisitorAnalytics visitors={visitors} />,
    },
  ];

  const activeComponent = navItems.find((item) => item.id === activeTab)?.component;

  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-black/80 backdrop-blur-lg transition-transform duration-300 ease-in-out md:relative md:translate-x-0${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-white/10 p-4">
            <h1 className="text-xl font-bold text-white">Electroplix</h1>
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)} 
              className="rounded-lg p-2 text-white/70 hover:bg-white/10 hover:text-white"
            >
              {sidebarOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
          <nav className="flex-1 space-y-1 p-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  if (isMobile) setSidebarOpen(false);
                }}
                className={`flex w-full items-center rounded-lg p-3 transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-white/10 text-white'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.icon}
                <span className="ml-3">{item.label}</span>
              </button>
            ))}
          </nav>
          <div className="border-t border-white/10 p-4">
            <button
              onClick={() => setIsAuthenticated(false)}
              className="flex w-full items-center rounded-lg p-3 text-red-400 transition-colors hover:bg-red-500/10 hover:text-red-300"
            >
              <LogOut className="size-5" />
              <span className="ml-3">Sign Out</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <header className="sticky top-0 z-20 border-b border-white/10 bg-black/80 p-4 backdrop-blur-lg">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">
              {navItems.find((item) => item.id === activeTab)?.label}
            </h2>
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="rounded-lg p-2 text-white/70 hover:bg-white/10 hover:text-white md:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </header>
        <main className="p-4">{activeComponent}</main>
      </div>
      {sidebarOpen && isMobile && (
        <div 
          className="fixed inset-0 z-20 bg-black/50 backdrop-blur-sm" 
          onClick={() => setSidebarOpen(false)} 
        />
      )}
    </div>
  );
};

export default AdminDashboard;