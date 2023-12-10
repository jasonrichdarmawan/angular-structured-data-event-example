import { Injectable } from '@angular/core';
import { GetEventByIdResponseBody } from '../models/get-event-by-id-response-body';

@Injectable()
export class EventRemoteDataSourceService {
  events: { [key: string]: GetEventByIdResponseBody | undefined };

  constructor() {
    this.events = {}

    let now = 1702644353743; // 2023-12-15T12:45:53.743Z

    this.events["1"] = {
      id: "1",

      location: [
        {
          "@type": "VirtualLocation",
          "url": "https://operaonline.stream5.com/"
        },
        {
          "@type": "Place",
          "name": "Snickerpark Stadium",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "100 West Snickerpark Dr",
            "addressLocality": "Snickertown",
            "postalCode": "19019",
            "addressRegion": "PA",
            "addressCountry": "US"
          }
        }
      ],

      name: "The Adventures of Kesha and Macklemore",

      startDate: function(){
        return new Date( now + (24 * 60 * 60 * 1000) ).toISOString()
      }(),

      description: "The Adventures of Kira and Morrison is coming to Snickertown in a can't miss performance.",

      endDate: function() {
        return new Date( now + (48 * 60 * 60 * 1000) ).toISOString()
      }(),

      eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",

      eventStatus: "https://schema.org/EventScheduled",

      image: [
        "https://example.com/photos/1x1/photo.jpg",
        "https://example.com/photos/4x3/photo.jpg",
        "https://example.com/photos/16x9/photo.jpg"
      ],

      offers: [
        {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          price: "30",
          priceCurrency: "USD",
          validFrom: new Date(now).toISOString(),
          url: "https://event.topoint.org/event/1"
        }
      ],

      organizer: {
        "@type": "Organization",
        name: "Kira and Morrison Music",
        url: "https://kiraandmorrisonmusic.com"
      },

      performer: {
        "@type": "PerformingGroup",
        name: "Kira and Morrison"
      }
    }

    this.events["2"] = {
      id: "2",

      location: {
        "@type": "Place",
        "name": "ダイバーシティ東京",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "江東区青海1-10",
          "addressLocality": "東京",
          "addressCountry": "日本"
        }
      },

      name: "Meet and Greet: Kesha and Macklemore",

      startDate: function(){
        return new Date( now + (24 * 60 * 60 * 1000) ).toISOString()
      }(),

      description: "The Adventures of Kesha and Macklemore is coming to Snickertown in a can't miss performance.",

      endDate: function(){
        return new Date( now + (48 * 60 * 60 * 1000) ).toISOString()
      }(),

      eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",

      offers: [
        {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          price: "30",
          priceCurrency: "USD",
          validFrom: new Date(now).toISOString(),
          url: "https://event.topoint.org/event/2"
        }
      ]
    }
  }

  getEventById(id: string): GetEventByIdResponseBody {
    return this.events[id] ?? {}
  }
}
