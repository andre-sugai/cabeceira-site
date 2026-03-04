import React, { useState } from 'react';

interface PasswordModalProps {
  onSuccess: () => void;
}

const PasswordModal: React.FC<PasswordModalProps> = ({ onSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Cabeceira2026') {
      setError(false);
      onSuccess();
    } else {
      setError(true);
      setPassword('');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md p-8 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 text-primary mb-6">
            <span className="material-icons-round text-3xl">lock</span>
          </div>
          
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Acesso Restrito</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8">
            Por favor, insira a senha para acessar o site.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError(false);
                }}
                placeholder="Digite a senha"
                className={`w-full px-4 py-3 rounded-lg border bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  error 
                    ? 'border-red-500 focus:ring-red-500/20' 
                    : 'border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-primary/20'
                }`}
                autoFocus
              />
              {error && (
                <p className="text-red-500 text-sm mt-2 text-left">Senha incorreta, tente novamente.</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-lg shadow-primary/20"
            >
              Acessar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordModal;
