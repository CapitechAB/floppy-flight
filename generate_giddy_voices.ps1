$ffmpeg = "C:\Users\buhre\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-9.0.2-full_build\bin\ffmpeg.exe"

Add-Type -AssemblyName System.Speech
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
$synth.SelectVoice('Microsoft Zira Desktop')
$synth.Rate = -1
$synth.Volume = 100

$voiceData = @{
    "voice_1" = "Oooone!"
    "voice_2" = "Twoooo!"
    "voice_3" = "Threeeee!"
    "voice_4" = "Fouuuur!"
    "voice_5" = "Five! Hehe, eee-xcellent!"
    "voice_6" = "Siiiiiix!"
    "voice_7" = "Seveeeen!"
    "voice_8" = "Eiiiiight!"
    "voice_9" = "Niiiine!"
    "voice_10" = "Ten! Woohoo, out-standing!"
    "voice_11" = "Eleveeeen!"
    "voice_12" = "Twuuuulve!"
    "voice_13" = "Thirteeeen!"
    "voice_14" = "Fourteeeen!"
    "voice_15" = "Fifteen! Yay, su-perb!"
    "voice_16" = "Sixteeeen!"
    "voice_17" = "Seventeeeen!"
    "voice_18" = "Eighteeen!"
    "voice_19" = "Nineteeeen!"
    "voice_20" = "Twenty! Hehe, flaw-less!"
    "voice_25" = "Twenty Five! Wow, bru-tal!"
    "voice_30" = "Thirty! Tee-hee, god-like!"
    "voice_combo1" = "Hehe, eee-xcellent!"
    "voice_combo2" = "Woohoo, out-standing!"
    "voice_combo3" = "Yay, flaw-less victory!"
    "voice_fight" = "Yay! Fight!"
    "voice_fatality" = "Uh oooooh, hehe!"
}

$tempDir = "src\assets\voice\temp"
if (-not (Test-Path $tempDir)) { New-Item -ItemType Directory -Path $tempDir -Force | Out-Null }
$srcVoiceDir = "src\assets\voice"
$publicVoiceDir = "public\voice"
$unityVoiceDir = "unity\Assets\Audio\Voice"

foreach ($key in $voiceData.Keys) {
    $text = $voiceData[$key]
    $rawWav = "$tempDir\$key.wav"
    $mp3Path = "$srcVoiceDir\$key.mp3"

    # 1. Synthesize Speech with Zira at measured rate
    $synth.SetOutputToWaveFile($rawWav)
    $synth.Speak($text)

    # 2. Transform into Giddy, Joyful Little Girl voice:
    # - rubberband pitch=1.42 for a higher, giddy sing-song pitch
    # - tempo=0.83 to make playback ~20% longer in time
    # - EQ: Cut mud, boost sweet vocal clarity & sparkling smiling highs
    # - Cheerful room ambiance reverb
    $filter = "rubberband=pitch=1.42:tempo=0.83," +
              "equalizer=f=200:width_type=h:width=120:g=-5," +
              "equalizer=f=3300:width_type=h:width=1000:g=4," +
              "equalizer=f=7500:width_type=h:width=2500:g=4," +
              "aecho=0.85:0.55:30:0.24," +
              "alimiter=limit=0.96:level=true"

    & $ffmpeg -y -i $rawWav -af $filter -codec:a libmp3lame -qscale:a 2 $mp3Path 2>$null

    Copy-Item $mp3Path "$publicVoiceDir\$key.mp3" -Force
    Copy-Item $mp3Path "$unityVoiceDir\$key.mp3" -Force

    Write-Host "Generated Giddy Little Girl clip: $key ($text)"
}

$synth.Dispose()
Remove-Item -Path $tempDir -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "All Giddy Little Girl announcer clips successfully generated!"
