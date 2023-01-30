(ns script
  (:require [clojure.edn :as edn]
            [markdown.core :as md]
            [clojure.pprint :refer [pprint]]
            [clojure.java.io :as io]
            [clojure.data.json :as json]))

(def base-path "./courses/")

(defn parse-chapter [chapter path]
  (let [chapter-path (str path "/" chapter)
        info (try (slurp (str chapter-path "/info.md")) (catch Exception e ""))
        html (try (slurp (str chapter-path "/html.md")) (catch Exception e ""))
        css (try (slurp (str chapter-path "/css.md")) (catch Exception e ""))]
    {:info (md/md-to-html-string info)
     :html (md/md-to-html-string html)
     :css (md/md-to-html-string css)}))

(defn parse-chapters [chapter-list path]
  (map #(parse-chapter % path) chapter-list))

(defn write-file [json] (spit "courses.js" json))

(let [courses (seq (.list (io/file "./courses")))]
  (->
   (map (fn [c]
          (let [path (str base-path c)
                chapters (seq (.list (io/file path)))]
            (pprint path)
            {:course (get (edn/read-string (slurp (str path "/" (first chapters)))) :name)
             :chapters (parse-chapters (rest chapters) path)})) courses)
   json/write-str
   write-file))