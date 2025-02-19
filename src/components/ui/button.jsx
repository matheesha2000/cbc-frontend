export function Button({ children, className = "", ...props }) {
    return (
      <button
        className={`px-4 py-2 bg-accent text-white rounded-lg transition ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }