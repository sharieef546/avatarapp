export const Avatar = ({ src, fallback }) => (
    <div className="relative w-10 h-10 overflow-hidden rounded-full">
      <img src={src} alt="Avatar" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-sm font-bold">
        {fallback}
      </div>
    </div>
  )