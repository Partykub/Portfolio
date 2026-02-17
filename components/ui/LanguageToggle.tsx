"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/app/context/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button 
      variant="outline" 
      size="sm"
      className="rounded-full px-3"
      onClick={() => setLanguage(language === 'en' ? 'th' : 'en')}
    >
      {language === 'en' ? '🇹🇭 TH' : '🇬🇧 EN'}
    </Button>
  );
}
