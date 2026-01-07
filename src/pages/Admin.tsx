import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import PageLayout from '@/components/PageLayout';
import AdminLogin from './AdminLogin';

const LOCAL_KEY = 'growd_admin_logged_in';

const Admin = () => {
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loggedIn, setLoggedIn] = useState(() => localStorage.getItem(LOCAL_KEY) === 'true');

  useEffect(() => {
    if (!loggedIn) return;
    const fetchContacts = async () => {
      setLoading(true);
      setError(null);
      if (!supabase) {
        setError('Supabase client not initialized.');
        setLoading(false);
        return;
      }
      const { data, error } = await supabase.from('Growd_contacts').select('*').order('created_at', { ascending: false });
      if (error) setError(error.message);
      else setContacts(data || []);
      setLoading(false);
    };
    fetchContacts();
  }, [loggedIn]);

  const handleLogin = () => {
    localStorage.setItem(LOCAL_KEY, 'true');
    setLoggedIn(true);
  };
  const handleLogout = () => {
    localStorage.removeItem(LOCAL_KEY);
    setLoggedIn(false);
  };

  if (!loggedIn) return <AdminLogin onLogin={handleLogin} />;

  return (
    <PageLayout>
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-8 md:px-16">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Contact Submissions</h1>
            <button onClick={handleLogout} className="bg-accent text-white px-4 py-2 rounded font-semibold hover:bg-accent/80">Logout</button>
          </div>
          {loading && <p>Loading...</p>}
          {error && <p className="text-red-600">{error}</p>}
          {!loading && !error && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {contacts.map((c) => (
                <div key={c.id} className={`rounded-xl border p-6 shadow bg-white flex flex-col gap-3 relative ${c.read ? 'opacity-70' : 'border-blue-400 shadow-blue-100'}`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-lg">{c.full_name}</span>
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${c.read ? 'bg-green-200 text-green-800' : 'bg-blue-200 text-blue-800'}`}>{c.read ? 'Read' : 'Unread'}</span>
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">{c.company}</div>
                  <div className="flex flex-col gap-1 text-sm">
                    <div><span className="font-semibold">Email:</span> <a href={`mailto:${c.email}`} className="text-blue-700 underline">{c.email}</a></div>
                    <div><span className="font-semibold">Phone:</span> {c.phone}</div>
                    <div><span className="font-semibold">Budget:</span> {c.budget}</div>
                    <div><span className="font-semibold">Timing:</span> {c.timing}</div>
                    {c.website && <div><span className="font-semibold">Website:</span> <a href={c.website} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">{c.website}</a></div>}
                  </div>
                  <div className="mt-2">
                    <span className="font-semibold">Project Overview:</span>
                    <div className="bg-gray-50 border rounded p-2 text-sm mt-1 whitespace-pre-line break-words">{c.overview}</div>
                  </div>
                  <div className="flex justify-between items-end mt-3">
                    <span className="text-xs text-muted-foreground">{c.created_at ? new Date(c.created_at).toLocaleString() : ''}</span>
                    <div className="flex gap-2">
                      <button
                        className={`px-2 py-1 rounded text-xs font-semibold border ${c.read ? 'bg-gray-100 border-gray-300 text-gray-700' : 'bg-blue-100 border-blue-400 text-blue-800'}`}
                        onClick={async () => {
                          await supabase.from('Growd_contacts').update({ read: !c.read }).eq('id', c.id);
                          setContacts((prev) => prev.map((msg) => msg.id === c.id ? { ...msg, read: !c.read } : msg));
                        }}
                      >
                        {c.read ? 'Mark Unread' : 'Mark Read'}
                      </button>
                      <button
                        className="px-2 py-1 rounded text-xs font-semibold bg-red-100 border border-red-300 text-red-800"
                        onClick={async () => {
                          await supabase.from('Growd_contacts').delete().eq('id', c.id);
                          setContacts((prev) => prev.filter((msg) => msg.id !== c.id));
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {contacts.length === 0 && <p className="mt-4 text-center">No submissions found.</p>}
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Admin;
