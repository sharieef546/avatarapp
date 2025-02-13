export const Card = ({ children, ...props }) => (
    <div className="bg-white rounded-lg shadow-md p-4" {...props}>
      {children}
    </div>
  )
  
  export const CardHeader = ({ children, ...props }) => (
    <div className="mb-4" {...props}>
      {children}
    </div>
  )
  
  export const CardTitle = ({ children, ...props }) => (
    <h3 className="text-lg font-bold" {...props}>
      {children}
    </h3>
  )
  
  export const CardDescription = ({ children, ...props }) => (
    <p className="text-gray-600" {...props}>
      {children}
    </p>
  )
  
  export const CardContent = ({ children, ...props }) => (
    <div className="mb-4" {...props}>
      {children}
    </div>
  )
  
  export const CardFooter = ({ children, ...props }) => (
    <div className="flex justify-end" {...props}>
      {children}
    </div>
  )