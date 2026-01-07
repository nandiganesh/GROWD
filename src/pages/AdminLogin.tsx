import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { supabase } from '@/lib/supabaseClient';

const AdminLogin = ({ onLogin }: { onLogin: () => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    if (!supabase) {
      setError('Supabase client not initialized.');
      setLoading(false);
      return;
    }
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message || 'Invalid credentials');
    } else {
      setError('');
      onLogin();
    }
    setLoading(false);
  };

  return (
    <PageLayout>
      <section className="flex min-h-[60vh] items-center justify-center">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow max-w-sm w-full space-y-4 border border-border">
          <h2 className="text-2xl font-bold text-center mb-4">Admin Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full rounded border px-4 py-2 mb-2"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full rounded border px-4 py-2 mb-2"
            required
          />
          {error && <div className="text-red-600 text-center text-sm">{error}</div>}
          <button type="submit" className="w-full bg-accent text-white py-2 rounded font-semibold hover:bg-accent/80" disabled={loading}>
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>
      </section>
    </PageLayout>
  );
};

export default AdminLogin;
