export const Label = ({ children, ...props }) => (
    <label className="block text-gray-700 mb-2" {...props}>
      {children}
    </label>
  )