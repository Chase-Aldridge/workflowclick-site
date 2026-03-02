export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div
        className="h-10 w-10 rounded-full border-4 border-primary/20 border-t-primary animate-spin"
        role="status"
        aria-label="Loading"
      />
    </div>
  )
}
