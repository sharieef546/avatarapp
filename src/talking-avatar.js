import React, { useState } from 'react'
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Label } from "./components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"
import { Upload } from "lucide-react"

export default function TalkingAvatar() {
  const [file, setFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const [avatarUrl, setAvatarUrl] = useState(null)

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      if (selectedFile.type.startsWith('image/')) {
        setFile(selectedFile)
        setPreviewUrl(URL.createObjectURL(selectedFile))
        setAvatarUrl(null) // Reset avatar when new file is uploaded
      } else {
        alert('Please upload a valid image file.')
      }
    }
  }

  const handleGenerateAvatar = () => {
    if (file) {
      // Simulate avatar generation
      setAvatarUrl('https://via.placeholder.com/300') // Placeholder URL for the generated avatar
    } else {
      alert('Please upload a photo first.')
    }
  }

  const handleDownloadAvatar = () => {
    if (avatarUrl) {
      const link = document.createElement('a')
      link.href = avatarUrl
      link.download = 'talking-avatar.png'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } else {
      alert('No avatar to download.')
    }
  }

  return (
    <Card className="w-full max-w-3xl mx-auto mt-10">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Create Talking Avatar</CardTitle>
        <CardDescription>Upload a static photo to generate a talking avatar.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="photo-upload">Upload Photo</Label>
          <Input
            id="photo-upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="file-input"
          />
        </div>
        {previewUrl && (
          <div className="flex justify-center">
            <img src={previewUrl} alt="Preview" className="max-w-full h-auto rounded-lg" />
          </div>
        )}
        <Button onClick={handleGenerateAvatar} disabled={!file} className="w-full">
          Generate Avatar
        </Button>
        {avatarUrl && (
          <div className="flex flex-col items-center space-y-4">
            <div className="flex justify-center">
              <img src={avatarUrl} alt="Avatar" className="max-w-full h-auto rounded-lg" />
            </div>
            <Button onClick={handleDownloadAvatar} className="w-full">
              Download Avatar
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}